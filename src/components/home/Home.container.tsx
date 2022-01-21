import { useQuery } from "@apollo/client";
import { Query, QueryFinbigsArgs } from "../../commons/types/generated/types";
import { FETCH_FINBIGS } from "../dataList/DataList.query";
import HomePresenter from "./Home.presenter";
const HomeContainer = () => {
  const { data: bestData } = useQuery<Query, QueryFinbigsArgs>(FETCH_FINBIGS, {
    variables: {
      start: 0,
      limit: 7,
      sort: "order:desc",
    },
  });

  const { data: updateData } = useQuery<Query, QueryFinbigsArgs>(
    FETCH_FINBIGS,
    {
      variables: {
        start: 0,
        limit: 6,
      },
    }
  );

  console.log(updateData);

  return (
    <HomePresenter
      bestData={bestData?.finbigs}
      updateData={updateData?.finbigs}
    />
  );
};

export default HomeContainer;
