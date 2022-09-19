import axios from "axios";
import { useParams } from "react-router";
import DataDetailPresenter from "./DataDetail.presenter";
import { useState } from "react";
import dayjs from "dayjs";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  useFinbigQuery,
  useTokensQuery,
  useUpdateUserMutation,
  useUserQuery,
} from "../../commons/graphql/generated";
const DataDetailContainer = () => {
  const token = sessionStorage.getItem("accessToken");
  const tokenId = sessionStorage.getItem("token");

  const [loading, setLoading] = useState(false);

  //* 데이터 날짜
  const [date, setDate] = useState({
    startDate: dayjs(new Date()).format(),
    endDate: dayjs(new Date()).format(),
  });

  const { data: user } = useTokensQuery({
    variables: {
      where: {
        token: token,
        id: tokenId,
      },
    },
  });

  const { dataId } = useParams();

  //* 유저가 구독 중인지, 유저의 다운로드 목록
  const { data: UserData } = useUserQuery({
    variables: {
      id: String(user?.tokens![0]?.userId),
    },
  });

  //* 상세보기 데이터
  const { data } = useFinbigQuery({
    variables: {
      id: String(dataId),
    },
  });

  //* 유저 다운로드 목록 추가, 유저 다운로드 수 + 1
  const [updateDownload] = useUpdateUserMutation();

  const handleDownLoad = async (dataId: any) => {
    if (!String(user?.tokens![0]?.userId)) {
      alert("로그인 후 이용이 가능합니다.");
      return;
    }
    if (!UserData?.user?.isSubscribe) {
      alert("구독 후 이용이 가능합니다.");
      return;
    }
    try {
      alert("다운로드 중입니다.");
      setLoading(true);
      let excelData: any;
      if (data?.finbig?.period === "연 단위") {
        const { data: excel } = await axios.get(
          `https://finbig-data.innofin.co.kr/api/${data?.finbig?.type}/${
            data?.finbig?.apiName
          }?start=${dayjs(date.startDate).format("YYYY")}&end=${dayjs(
            date.endDate
          ).format("YYYY")}`
        );
        excelData = excel;
      } else if (data?.finbig?.period === "월 단위") {
        const { data: excel } = await axios.get(
          `https://finbig-data.innofin.co.kr/api/${data?.finbig?.type}/${
            data?.finbig?.apiName
          }?start=${dayjs(date.startDate).format("YYYYMM")}&end=${dayjs(
            date.endDate
          ).format("YYYYMM")}`
        );
        excelData = excel;
      } else {
        const { data: excel } = await axios.get(
          `https://finbig-data.innofin.co.kr/api/${data?.finbig?.type}/${data?.finbig?.apiName}?start=${date.startDate}&end=${date.endDate}`
        );
        excelData = excel;
      }

      updateDownload({
        variables: {
          input: {
            data: {
              finbig_downloads: UserData?.user?.finbig_downloads
                ?.map((data) => String(data?.id))
                .concat(dataId),
              downloadCount: Number(UserData?.user?.downloadCount) + 1,
            },
            where: {
              id: String(user?.tokens![0]?.userId),
            },
          },
        },
      });
      const workSheetColumnNames = Object.keys(excelData[0]);
      //* 데이터
      const workSheetRowValues = excelData.map((data: any) => {
        let newData = Object.values(data);
        for (let i = 0; i < Object.values(data).length; i++) {
          if (Array.isArray(Object.values(data)[i])) {
            let a = "";
            //@ts-ignore
            for (let j = 0; j < Object.values(data)[i].length; j++) {
              //@ts-ignore
              a = a + JSON.stringify(Object.values(data)[i][j]);
            }
            newData[3] = a;
            //@ts-ignore
          }
        }
        return newData;
      });
      const workBook = XLSX.utils.book_new();
      const workSheetData = [workSheetColumnNames, ...workSheetRowValues];
      const workSheet = XLSX.utils.aoa_to_sheet(workSheetData);
      XLSX.utils.book_append_sheet(workBook, workSheet, "data");
      const excelBuffer = XLSX.write(workBook, {
        bookType: "xlsx",
        type: "array",
      });
      const returnData = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      });
      saveAs(returnData, `${String(data?.finbig?.apiName)}.xlsx`);
    } catch (e) {
      console.log(e);
      alert("해당 날짜의 데이터가 없습니다. 날짜를 다시 입력해주세요.");
      return;
    } finally {
      setLoading(false);
    }
  };
  //* 날짜 변경
  const handleDate = (e: any) => {
    let period = 0;
    if (data?.finbig?.downloadPeriod === "3개월") {
      period = 3;
    } else if (data?.finbig?.downloadPeriod === "1개월") {
      period = 1;
    } else if (data?.finbig?.downloadPeriod === "1년") {
      period = 12;
    } else if (data?.finbig?.downloadPeriod === "2주") {
      period = 2;
    } else {
      period = 100000;
    }

    if (e) {
      const date1 = dayjs(e[0]);
      const date2 = dayjs(e[1]);
      if (data?.finbig?.downloadPeriod === "2주") {
        if (date2.diff(date1, "week") > period) {
          setDate({
            ...date,
            startDate: dayjs(e[0]).format("YYYYMMDD"),
            endDate: dayjs(e[0]).add(2, "week").format("YYYYMMDD"),
          });
        } else {
          setDate({
            ...date,
            startDate: dayjs(e[0]).format("YYYYMMDD"),
            endDate: dayjs(e[1]).format("YYYYMMDD"),
          });
        }
      } else {
        if (date2.diff(date1, "month") > period) {
          setDate({
            ...date,
            startDate: dayjs(e[0]).format("YYYYMMDD"),
            endDate: dayjs(e[0]).add(period, "month").format("YYYYMMDD"),
          });
        } else {
          setDate({
            ...date,
            startDate: dayjs(e[0]).format("YYYYMMDD"),
            endDate: dayjs(e[1]).format("YYYYMMDD"),
          });
        }
      }
    }
  };

  return (
    <DataDetailPresenter
      data={data}
      date={date}
      loading={loading}
      handleDate={handleDate}
      handleDownLoad={handleDownLoad}
    />
  );
};

export default DataDetailContainer;
