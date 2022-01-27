import DataListPresenter from "./DataList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_FINBIGS,
  FETCH_USER_VIEWDATA,
  UPDATE_FINBIG_VIEWCOUNT,
  UPDATE_RECENT_DATA,
} from "./DataList.query";
import {
  Mutation,
  MutationUpdateFinbigArgs,
  MutationUpdateUserArgs,
  Query,
  QueryFinbigsArgs,
  QueryUserArgs,
} from "../../commons/types/generated/types";
import { useState } from "react";
import { useEffect } from "react";
import { blankImg } from "../../utils/blankImg";
import { useParams } from "react-router";

const DataListContainer = () => {
  const userId = sessionStorage.getItem("userId");
  const { search } = useParams();

  //* 페이지네이션 상태
  const [listInput, setListInput] = useState({
    start: 0,
    limit: 6,
  });

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  //* 데이터 상품 받아오기
  const { data } = useQuery<Query, QueryFinbigsArgs>(FETCH_FINBIGS, {
    variables: {
      where: {
        isShow: true,
      },
    },
  });

  //* 최근 본 데이터 불러오기
  const { data: MyData } = useQuery<Query, QueryUserArgs>(FETCH_USER_VIEWDATA, {
    variables: {
      id: String(userId),
    },
    fetchPolicy: "no-cache",
  });

  //* 최근 본 데이터 뮤테이션
  const [updateRecentData] = useMutation<Mutation, MutationUpdateUserArgs>(
    UPDATE_RECENT_DATA
  );

  //*조회수 증가 뮤테이션
  const [updateFinbigViewCount] = useMutation<
    Mutation,
    MutationUpdateFinbigArgs
  >(UPDATE_FINBIG_VIEWCOUNT);

  //* 길이 맞추기
  useEffect(() => {
    if (data?.finbigs?.length) {
      setBlackLength(
        blankImg(
          data?.finbigs
            ?.filter((data: any) => data?.title?.includes(search || ""))
            .splice(listInput.start, listInput.limit).length
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, listInput, search]);

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

  //* 최근 본 데이터 함수
  const handleRecentData = async (dataId: any) => {
    if (!userId) return;
    try {
      await updateRecentData({
        variables: {
          input: {
            data: {
              finbigView: MyData?.user?.finbigView
                ?.map((data) => String(data?.id))
                .concat(dataId),
            },
            where: {
              id: String(userId),
            },
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <DataListPresenter
        finbigs={data?.finbigs}
        blackLength={blackLength}
        listInput={listInput}
        setListInput={setListInput}
        handleViewCount={handleViewCount}
        handleRecentData={handleRecentData}
      />
    </>
  );
};
export default DataListContainer;
