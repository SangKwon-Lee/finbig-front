import { useParams } from "react-router";
import { useVisualDatumQuery } from "../../commons/graphql/generated";
import VisualDetailPresenter from "./VisualDetail.presenter";

const VisualDetailContainer = () => {
  const { visualId } = useParams();

  //* 데이터 불러오기 쿼리
  const { data } = useVisualDatumQuery({
    variables: {
      id: String(visualId),
    },
  });

  return <VisualDetailPresenter data={data} />;
};

export default VisualDetailContainer;
