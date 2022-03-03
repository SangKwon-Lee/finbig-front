import DataListPresenter from "./DataList.presenter";
import { useState } from "react";
import { useEffect } from "react";
import { blankImg } from "../../utils/blankImg";
import { useParams } from "react-router";
import {
  useFinbigsQuery,
  useTokensQuery,
  useUpdateFinbigMutation,
  useUpdateUserMutation,
  useUserQuery,
} from "../../commons/graphql/generated";
const DataListContainer = () => {
  const token = sessionStorage.getItem("accessToken");
  const tokenId = sessionStorage.getItem("token");

  //* 토큰
  const { data: user } = useTokensQuery({
    variables: {
      where: {
        token: token,
        id: tokenId,
      },
    },
  });

  const { search } = useParams();

  //* 페이지네이션 상태
  const [listInput, setListInput] = useState({
    start: 0,
    limit: 6,
  });

  //* 정렬 상태
  const [sort, setSort] = useState("id:asc");

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  //* 데이터 상품 받아오기
  const { data, loading } = useFinbigsQuery({
    variables: {
      sort,
      where: {
        isShow: true,
      },
    },
  });

  console.log(data);

  //* 최근 본 데이터 불러오기
  const { data: MyData } = useUserQuery({
    variables: {
      id: String(user?.tokens![0]?.userId),
    },
    fetchPolicy: "no-cache",
  });

  //* 최근 본 데이터 뮤테이션
  const [updateRecentData] = useUpdateUserMutation();

  //*조회수 증가 뮤테이션
  const [updateFinbigViewCount] = useUpdateFinbigMutation();

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
    } catch (e) {}
  };

  //* 최근 본 데이터 함수
  const handleRecentData = async (dataId: any) => {
    if (!String(user?.tokens![0]?.userId)) return;
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
              id: String(user?.tokens![0]?.userId),
            },
          },
        },
      });
    } catch (e) {}
  };

  const handleSort = (e: any) => {
    setSort(e.target.value);
  };

  return (
    <>
      <DataListPresenter
        finbigs={data}
        loading={loading}
        listInput={listInput}
        blackLength={blackLength}
        setListInput={setListInput}
        handleSort={handleSort}
        handleViewCount={handleViewCount}
        handleRecentData={handleRecentData}
      />
    </>
  );
};
export default DataListContainer;
