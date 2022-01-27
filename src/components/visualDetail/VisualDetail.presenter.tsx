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
import {
  DataDetailOhterContentsWrapper,
  DataDetailOhterWrapper,
  DataDetailOther,
  DataDetailOtherContents,
  DataDetailOtherImg,
  DataDetailOtherTilte,
  DataDetailTitleWrapper,
} from "../dataDetail/DataDetail.style";
import { useNavigate } from "react-router";

interface VisualDetailProps {
  data: Maybe<VisualData> | undefined;
}

const VisualDetailPresenter: React.FC<VisualDetailProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <VisualDetailWrapper>
        <VisualDetailImg src={data?.thumbnail || ""} />
        <VisualDetailType>[데이터 활용]</VisualDetailType>
        <VisualDetailTitle>{data?.title}</VisualDetailTitle>
        <VisualDetailContents>{data?.description}</VisualDetailContents>
        <VisualDetailDivide></VisualDetailDivide>
        {data?.contents && <Viewer initialValue={data.contents} />}
        <DataDetailOther>관련 상품</DataDetailOther>
        <DataDetailOhterWrapper>
          {data?.finbigs?.map((data) => (
            <DataDetailOhterContentsWrapper>
              <DataDetailOtherImg
                src={String(data?.thumbnail)}
                onClick={() => {
                  navigate(`/data/${data?.id}`);
                }}
              />
              <DataDetailTitleWrapper>
                <DataDetailOtherTilte
                  onClick={() => {
                    navigate(`/data/${data?.id}`);
                  }}
                >
                  {data?.title}
                </DataDetailOtherTilte>
                <DataDetailOtherContents>
                  {data?.description}
                </DataDetailOtherContents>
              </DataDetailTitleWrapper>
            </DataDetailOhterContentsWrapper>
          ))}
        </DataDetailOhterWrapper>
      </VisualDetailWrapper>
    </>
  );
};

export default VisualDetailPresenter;
