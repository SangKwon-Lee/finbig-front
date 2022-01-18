import { Maybe, VisualData } from "../../commons/types/generated/types";
import {
  VisualDetailContents,
  VisualDetailDivide,
  VisualDetailImg,
  VisualDetailTitle,
  VisualDetailType,
  VisualDetailWrapper,
} from "./VisualDetail.style";
import { Viewer } from "@toast-ui/react-editor";

interface VisualDetailProps {
  data: Maybe<VisualData> | undefined;
}

const VisualDetailPresenter: React.FC<VisualDetailProps> = ({ data }) => {
  return (
    <VisualDetailWrapper>
      <VisualDetailImg src={data?.thumbnail || ""} />
      <VisualDetailType>[데이터 활용]</VisualDetailType>
      <VisualDetailTitle>{data?.title}</VisualDetailTitle>
      <VisualDetailContents>{data?.description}</VisualDetailContents>
      <VisualDetailDivide></VisualDetailDivide>
      {data?.contents && <Viewer initialValue={data.contents} />}
    </VisualDetailWrapper>
  );
};

export default VisualDetailPresenter;
