import { useState } from "react";
import {
  useUpdateVisualDatumMutation,
  useVisualDataConnectionQuery,
  useVisualDataQuery,
} from "../../commons/graphql/generated";
import VisualListPresenter from "./VisualList.presenter";

const VisualListContainer = () => {
  //* 페이지네이션 상태
  const [listInput, setListInput] = useState({
    start: 0,
    limit: 6,
  });

  //* 조회수 증가 뮤테이션
  const [updateVisual] = useUpdateVisualDatumMutation();

  //* 데이터 불러오기 쿼리
  const { data: visualList, loading: visualListLoading } = useVisualDataQuery({
    variables: {
      start: listInput.start,
      limit: listInput.limit,
      where: {
        isShow: true,
      },
      sort: "created_at:desc",
    },
  });

  //* 데이터 전체 길이
  const { data: visualCount } = useVisualDataConnectionQuery({
    variables: {
      where: {
        isShow: true,
      },
    },
  });

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
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <VisualListPresenter
      listInput={listInput}
      setListInput={setListInput}
      visualList={visualList}
      listLength={visualCount?.visualDataConnection?.aggregate?.count}
      visualListLoading={visualListLoading}
      handleUpdateVisual={handleUpdateVisual}
    />
  );
};

export default VisualListContainer;
