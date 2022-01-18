import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  Mutation,
  MutationUpdateVisualDatumArgs,
  Query,
  QueryVisualDataArgs,
  QueryVisualDataConnectionArgs,
} from "../../commons/types/generated/types";
import { UPDATE_VISUAL_DATUM } from "../admin/visualCreate/VisualCreate.query";
import { FETCH_VISUAL_DATA } from "../admin/visualList/VisualList.query";
import VisualListPresenter from "./VisualList.presenter";
import { FETCH_VISUAL_COUNT } from "./VisualList.query";

const VisualListContainer = () => {
  //* 페이지네이션 상태
  const [listInput, setListInput] = useState({
    start: 0,
    limit: 6,
  });
  //* 조회수 증가 뮤테이션
  const [updateVisual] = useMutation<Mutation, MutationUpdateVisualDatumArgs>(
    UPDATE_VISUAL_DATUM
  );

  //* 데이터 불러오기 쿼리
  const { data: visualList } = useQuery<Query, QueryVisualDataArgs>(
    FETCH_VISUAL_DATA,
    {
      variables: {
        start: listInput.start,
        limit: listInput.limit,
        where: {
          isShow: true,
        },
        sort: "created_at:desc",
      },
    }
  );

  //* 데이터 전체 길이
  const { data: visualCount } = useQuery<Query, QueryVisualDataConnectionArgs>(
    FETCH_VISUAL_COUNT,
    {
      variables: {
        where: {
          isShow: true,
        },
      },
    }
  );

  //* 조회수 증가 함수
  const handleUpdateVisual = async (dataId: string, viewCount: number) => {
    try {
      await updateVisual({
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

  return (
    <VisualListPresenter
      visualList={visualList?.visualData}
      listLength={visualCount?.visualDataConnection?.aggregate?.count}
      listInput={listInput}
      setListInput={setListInput}
      handleUpdateVisual={handleUpdateVisual}
    />
  );
};

export default VisualListContainer;
