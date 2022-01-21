import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { Query, QueryFinbigArgs } from "../../commons/types/generated/types";
import DataDetailPresenter from "./DataDetail.presenter";
import { FETCH_FINBIG } from "./DataDetail.query";

const DataDetailContainer = () => {
  const { dataId } = useParams();

  //* 상세보기 데이터
  const { data } = useQuery<Query, QueryFinbigArgs>(FETCH_FINBIG, {
    variables: {
      id: String(dataId),
    },
  });

  return <DataDetailPresenter data={data?.finbig} />;
};

export default DataDetailContainer;
