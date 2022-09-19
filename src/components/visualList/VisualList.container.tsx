import { useEffect, useState } from "react";
import {
  useUpdateVisualDatumMutation,
  useVisualDataConnectionQuery,
  useVisualDataQuery,
} from "../../commons/graphql/generated";
import VisualListPresenter from "./VisualList.presenter";
import { blankImg } from "../../utils/blankImg";

const VisualListContainer = () => {
  //* 페이지네이션 상태
  const [listInput, setListInput] = useState({
    start: 0,
    limit: 9,
  });

  //* 조회수 증가 뮤테이션
  const [updateVisual] = useUpdateVisualDatumMutation();

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  // * 검색
  const [search, setSearch] = useState("");

  //* 데이터 불러오기 쿼리
  const { data: visualList, loading: visualListLoading } = useVisualDataQuery({
    variables: {
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

  //* 길이 맞추기
  useEffect(() => {
    if (visualList?.visualData?.length) {
      setBlackLength(
        blankImg(
          visualList?.visualData
            ?.filter((data: any) => data?.category?.includes(search || ""))
            .splice(listInput.start, listInput.limit).length
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visualList, listInput, search]);

  return (
    <VisualListPresenter
      search={search}
      setSearch={setSearch}
      listInput={listInput}
      visualList={visualList}
      blackLength={blackLength}
      setListInput={setListInput}
      visualListLoading={visualListLoading}
      handleUpdateVisual={handleUpdateVisual}
      listLength={visualCount?.visualDataConnection?.aggregate?.count}
    />
  );
};

export default VisualListContainer;
