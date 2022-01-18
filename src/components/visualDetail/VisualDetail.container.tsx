import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import {
  Query,
  QueryVisualDatumArgs,
} from "../../commons/types/generated/types";
import VisualDetailPresenter from "./VisualDetail.presenter";
import { FETCH_VISUAL_DATUM } from "./VisualDetail.query";

const VisualDetailContainer = () => {
  const { visualId } = useParams();

  //* 데이터 불러오기 쿼리
  const { data } = useQuery<Query, QueryVisualDatumArgs>(FETCH_VISUAL_DATUM, {
    variables: {
      id: String(visualId),
    },
  });
  return <VisualDetailPresenter data={data?.visualDatum} />;
};

export default VisualDetailContainer;
