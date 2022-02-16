import axios from "axios";
import { useParams } from "react-router";
import DataDetailPresenter from "./DataDetail.presenter";
import { useState } from "react";
import dayjs from "dayjs";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  useFinbigQuery,
  useUpdateUserMutation,
  useUserQuery,
} from "../../commons/graphql/generated";

const DataDetailContainer = () => {
  const userId = sessionStorage.getItem("userId");
  const { dataId } = useParams();

  //* 데이터 날짜
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

  //* 날짜 변경
  const handleDate = (e: any) => {
    setDate({
      ...date,
      startDate: dayjs(e[0]).format("YYYYMMDD"),
      endDate: dayjs(e[1]).format("YYYYMMDD"),
    });
  };

  //* 유저가 구독 중인지, 유저의 다운로드 목록
  const { data: UserData } = useUserQuery({
    variables: {
      id: String(userId),
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
    if (!userId) {
      alert("로그인 후 이용이 가능합니다.");
      return;
    }
    if (!UserData?.user?.isSubscribe) {
      alert("구독 후 이용이 가능합니다.");
      return;
    }
    if (data?.finbig?.type === "algorithm") {
      alert("다운로드 중입니다.");
      try {
        const { data: excelData } = await axios.get(
          `http://221.168.33.64/api/algorithm/${data?.finbig?.apiName}?start=${date.startDate}&end=${date.endDate}`
        );
        updateDownload({
          variables: {
            input: {
              data: {
                finbigDownload: UserData?.user?.finbigDownload
                  ?.map((data) => String(data?.id))
                  .concat(dataId),
                downloadCount: Number(UserData?.user?.downloadCount) + 1,
              },
              where: {
                id: String(userId),
              },
            },
          },
        });
        const workSheetColumnNames = Object.keys(excelData[0]);
        //* 데이터
        const workSheetRowValues = excelData.map((data: any) => {
          return Object.values(data);
        });
        const workBook = XLSX.utils.book_new();
        const workSheetData = [workSheetColumnNames, ...workSheetRowValues];
        const workSheet = XLSX.utils.aoa_to_sheet(workSheetData);
        XLSX.utils.book_append_sheet(
          workBook,
          workSheet,
          String(data?.finbig?.apiName)
        );
        const excelBuffer = XLSX.write(workBook, {
          bookType: "xlsx",
          type: "array",
        });
        const returnData = new Blob([excelBuffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        });
        saveAs(returnData, `${String(data?.finbig?.apiName)}.xlsx`);
      } catch (e) {
        alert("해당 날짜의 데이터가 없습니다. 날짜를 다시 입력해주세요.");
        return;
      }
    } else {
      try {
        alert("다운로드 중입니다.");
        const { data: excelData } = await axios.get(
          `http://221.168.33.64/api/portfolio/${data?.finbig?.apiName}?start=${date.startDate}&end=${date.endDate}`
        );
        updateDownload({
          variables: {
            input: {
              data: {
                finbigDownload: UserData?.user?.finbigDownload
                  ?.map((data) => String(data?.id))
                  .concat(dataId),
                downloadCount: Number(UserData?.user?.downloadCount) + 1,
              },
              where: {
                id: String(userId),
              },
            },
          },
        });
        //* 칼럼 명
        const workSheetColumnNames = Object.keys(excelData[0]);
        //* 데이터
        const workSheetRowValues = excelData.map((data: any) => {
          return Object.values(data);
        });
        const workBook = XLSX.utils.book_new();
        const workSheetData = [workSheetColumnNames, ...workSheetRowValues];
        const workSheet = XLSX.utils.aoa_to_sheet(workSheetData);
        XLSX.utils.book_append_sheet(
          workBook,
          workSheet,
          String(data?.finbig?.apiName)
        );
        const excelBuffer = XLSX.write(workBook, {
          bookType: "xlsx",
          type: "array",
        });
        const returnData = new Blob([excelBuffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        });
        saveAs(returnData, `${String(data?.finbig?.apiName)}.xlsx`);
      } catch (e) {
        alert("해당 날짜의 데이터가 없습니다. 날짜를 다시 입력해주세요.");
        return;
      }
    }
  };

  return (
    <DataDetailPresenter
      data={data}
      handleDate={handleDate}
      handleDownLoad={handleDownLoad}
    />
  );
};

export default DataDetailContainer;
