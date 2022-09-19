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
import { VisualDatumQuery } from "../../commons/graphql/generated";

interface VisualDetailProps {
  data: VisualDatumQuery | undefined;
}

const VisualDetailPresenter: React.FC<VisualDetailProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <VisualDetailWrapper>
        <VisualDetailImg src={data?.visualDatum?.thumbnail || ""} />
        <VisualDetailType>[{data?.visualDatum?.category}]</VisualDetailType>
        <VisualDetailTitle>{data?.visualDatum?.title}</VisualDetailTitle>
        <VisualDetailContents>
          {data?.visualDatum?.description}
        </VisualDetailContents>
        <VisualDetailDivide></VisualDetailDivide>
        {data?.visualDatum?.contents && (
          <Viewer initialValue={data.visualDatum?.contents} />
        )}
        {Number(data?.visualDatum?.finbigs?.length) > 0 && (
          <>
            <DataDetailOther>관련 상품</DataDetailOther>
            <DataDetailOhterWrapper>
              {data?.visualDatum?.finbigs?.map((data) => (
                <DataDetailOhterContentsWrapper key={data?.id}>
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
          </>
        )}
      </VisualDetailWrapper>
    </>
  );
};

export default VisualDetailPresenter;
