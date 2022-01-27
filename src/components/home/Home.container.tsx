import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import {
  Mutation,
  MutationUpdateFinbigArgs,
  Query,
  QueryFinbigsArgs,
} from "../../commons/types/generated/types";
import { FETCH_FINBIGS } from "../dataList/DataList.query";
import HomePresenter from "./Home.presenter";
import { UPDATE_ISBEST, FETCH_FINBIGS_ID } from "./Home.query";

const HomeContainer = () => {
  //* 모든 데이터의 ID
  const { data: allData } = useQuery<Query, QueryFinbigsArgs>(FETCH_FINBIGS_ID);

  //* 베스트 데이터
  const { data: bestData } = useQuery<Query, QueryFinbigsArgs>(FETCH_FINBIGS, {
    variables: {
      start: 0,
      limit: 7,
      sort: "order:desc",
    },
  });

  //* 업데이트 데이터
  const { data: updateData } = useQuery<Query, QueryFinbigsArgs>(
    FETCH_FINBIGS,
    {
      variables: {
        start: 0,
        limit: 6,
      },
    }
  );

  //* isBest로 변경하는 뮤테이션
  const [updateIsBest] = useMutation<Mutation, MutationUpdateFinbigArgs>(
    UPDATE_ISBEST
  );

  useEffect(() => {
    handelIsBest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //* isBest 변경 함수
  const handelIsBest = async () => {
    const allId = allData?.finbigs?.map((data) => data?.id);
    const bestId = bestData?.finbigs?.map((data) => data?.id);
    const Difference = allId?.filter((data) => !bestId?.includes(data));
    try {
      await Promise.all([
        bestId?.map((data) =>
          updateIsBest({
            variables: {
              input: {
                data: {
                  isBest: true,
                },
                where: {
                  id: String(data),
                },
              },
            },
          })
        ),
      ]);
      await Promise.all([
        Difference?.map((data) =>
          updateIsBest({
            variables: {
              input: {
                data: {
                  isBest: false,
                },
                where: {
                  id: String(data),
                },
              },
            },
          })
        ),
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <HomePresenter
      bestData={bestData?.finbigs}
      updateData={updateData?.finbigs}
    />
  );
};

export default HomeContainer;
