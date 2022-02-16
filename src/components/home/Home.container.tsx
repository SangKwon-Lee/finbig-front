import { useEffect } from "react";
import {
  useFinbigsQuery,
  useUpdateFinbigMutation,
} from "../../commons/graphql/generated";
import HomePresenter from "./Home.presenter";

const HomeContainer = () => {
  //* 모든 데이터의 ID
  const { data: allData } = useFinbigsQuery();

  //* 베스트 데이터
  const { data: bestData, loading: bestLoading } = useFinbigsQuery({
    variables: {
      start: 0,
      limit: 7,
      sort: "order:desc",
    },
  });

  //* 업데이트 데이터
  const { data: updateData, loading: updateLoading } = useFinbigsQuery({
    variables: {
      start: 0,
      limit: 6,
    },
  });

  //* isBest로 변경하는 뮤테이션
  const [updateIsBest] = useUpdateFinbigMutation();

  //* 베스트 데이터 불러오기
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
    } catch (e) {}
  };

  return (
    <HomePresenter
      bestData={bestData}
      updateData={updateData}
      bestLoading={bestLoading}
      updateLoading={updateLoading}
    />
  );
};

export default HomeContainer;
