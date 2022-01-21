import axios from "axios";
import DataListPresenter from "./DataList.presenter";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_FINBIGS,
  FETCH_FINBIGS_COUNT,
  UPDATE_FINBIG_VIEWCOUNT,
} from "./DataList.query";
import {
  Mutation,
  MutationUpdateFinbigArgs,
  Query,
  QueryFinbigsArgs,
  QueryFinbigsConnectionArgs,
} from "../../commons/types/generated/types";
import { useState } from "react";
import { useEffect } from "react";

const DataListContainer = () => {
  //* 페이지네이션 상태
  const [listInput, setListInput] = useState({
    start: 0,
    limit: 6,
  });
  //* 데이터 상품 받아오기
  const { data } = useQuery<Query, QueryFinbigsArgs>(FETCH_FINBIGS, {
    variables: {
      start: listInput.start,
      limit: listInput.limit,
      where: {
        isShow: true,
      },
    },
  });

  //* 데이터 길이
  const { data: dataCount } = useQuery<Query, QueryFinbigsConnectionArgs>(
    FETCH_FINBIGS_COUNT,
    {
      variables: {
        where: {
          isShow: true,
        },
      },
    }
  );

  //*조회수 증가 뮤테이션
  const [updateFinbigViewCount] = useMutation<
    Mutation,
    MutationUpdateFinbigArgs
  >(UPDATE_FINBIG_VIEWCOUNT);

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  //* 길이 맞추기
  useEffect(() => {
    if (data?.finbigs?.length) {
      if (data?.finbigs?.length === 3 || data?.finbigs?.length === 6) {
        setBlackLength(6);
      } else if (data?.finbigs?.length < 3) {
        setBlackLength(data?.finbigs?.length + 3);
      } else {
        setBlackLength(data?.finbigs?.length);
      }
    }
  }, [data]);

  //* 조회수 증가
  const handleViewCount = async (dataId: string, viewCount: number) => {
    try {
      await updateFinbigViewCount({
        variables: {
          input: {
            data: {
              viewCount: viewCount + 1,
            },
            where: {
              id: String(dataId),
            },
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getTest = async () => {
    const { data } = await axios.get("http://221.168.33.64/api/reits/info");
    //* 칼럼 명
    const workSheetColumnNames = Object.keys(data[0]);
    //* 데이터
    const workSheetRowValues = data.map((data: any) => {
      return Object.values(data);
    });
    exportExcel(workSheetRowValues, workSheetColumnNames);
  };

  //* 엑셀파일로 다운받기
  const exportExcel = (data: any, workSheetColumnNames: any) => {
    const workBook = XLSX.utils.book_new();
    const workSheetData = [workSheetColumnNames, ...data];
    const workSheet = XLSX.utils.aoa_to_sheet(workSheetData);
    XLSX.utils.book_append_sheet(workBook, workSheet, "data");
    const excelBuffer = XLSX.write(workBook, {
      bookType: "xlsx",
      type: "array",
    });
    const excelData = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    saveAs(excelData, `fileName.xlsx`);
  };

  return (
    <>
      <DataListPresenter
        finbigs={data?.finbigs}
        blackLength={blackLength}
        listInput={listInput}
        setListInput={setListInput}
        dataCount={dataCount?.finbigsConnection?.aggregate?.count}
        dataTotalCount={dataCount?.finbigsConnection?.aggregate?.totalCount}
        handleViewCount={handleViewCount}
      />
    </>
  );
};
export default DataListContainer;
