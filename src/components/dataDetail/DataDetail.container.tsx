import { useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import { useParams } from "react-router";
import {
  Mutation,
  MutationUpdateUserArgs,
  Query,
  QueryFinbigArgs,
  QueryUserArgs,
} from "../../commons/types/generated/types";
import DataDetailPresenter from "./DataDetail.presenter";
import {
  FETCH_FINBIG,
  FETCH_USER_IS_SUBSCRIPTION,
  UPDATE_DOWNLOAD_DATA,
} from "./DataDetail.query";
import { useState } from "react";
import dayjs from "dayjs";
import { exportExcel } from "../../utils/exportExcel";

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
  const { data: UserData } = useQuery<Query, QueryUserArgs>(
    FETCH_USER_IS_SUBSCRIPTION,
    {
      variables: {
        id: String(userId),
      },
    }
  );

  //* 상세보기 데이터
  const { data } = useQuery<Query, QueryFinbigArgs>(FETCH_FINBIG, {
    variables: {
      id: String(dataId),
    },
  });

  //* 유저 다운로드 목록 추가
  const [updateDownload] = useMutation<Mutation, MutationUpdateUserArgs>(
    UPDATE_DOWNLOAD_DATA
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      try {
        const { data: excelData } = await axios.get(
          `http://221.168.33.64/api/algorithm/${data?.finbig?.apiName}?start=${date.startDate}&end=${date.endDate}`
        );
        alert("다운로드 중입니다.");
        updateDownload({
          variables: {
            input: {
              data: {
                finbigDownload: UserData?.user?.finbigDownload
                  ?.map((data) => String(data?.id))
                  .concat(dataId),
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
        exportExcel(
          workSheetColumnNames,
          workSheetRowValues,
          String(data?.finbig?.apiName)
        );
      } catch (e) {
        alert("날짜를 다시 입력해주세요.");
        return;
      }
    } else {
      try {
        const { data: excelData } = await axios.get(
          `http://221.168.33.64/api/portfolio/${data?.finbig?.apiName}?start=${date.startDate}&end=${date.endDate}`
        );
        alert("다운로드 중입니다.");
        updateDownload({
          variables: {
            input: {
              data: {
                finbigDownload: UserData?.user?.finbigDownload
                  ?.map((data) => String(data?.id))
                  .concat(dataId),
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
        exportExcel(
          workSheetColumnNames,
          workSheetRowValues,
          String(data?.finbig?.apiName)
        );
      } catch (e) {
        alert("날짜를 다시 입력해주세요.");
        return;
      }
    }
  };

  return (
    <DataDetailPresenter
      data={data?.finbig}
      handleDate={handleDate}
      handleDownLoad={handleDownLoad}
    />
  );
};

export default DataDetailContainer;
