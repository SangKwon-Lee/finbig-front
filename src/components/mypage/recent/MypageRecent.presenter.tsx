import { useNavigate } from "react-router";
import { UserQuery } from "../../../commons/graphql/generated";
import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import {
  MypageBody,
  MypageRecentWrapper,
  MypageRecentListText,
  MypageBodyColumn,
  MypageRecentListNumber,
  MypageDataListWrapper,
  MypageDataWrapper,
  MypageDataThumbnail,
  MypageDataTitle,
  MypageDataDescription,
  MypageDataBtnWrapper,
  MypageDataBestBtn,
  MypageDataUpdateBtn,
  DataListImgBlank,
} from "./MypageRecent.style";

interface MypageRecentProps {
  data?: UserQuery | undefined;
  blackLength: number;
  loading: boolean;
}

const MypageRecentPresenter: React.FC<MypageRecentProps> = ({
  data,
  blackLength,
  loading,
}) => {
  const navigate = useNavigate();
  return (
    <MypageRecentWrapper>
      <MypageBody>
        <MypageLayoutContainer menu="recent" />
        <MypageBodyColumn>
          <MypageRecentListText>
            상품이 모두
            <MypageRecentListNumber>
              &nbsp; {data?.user?.finbigView?.length}
            </MypageRecentListNumber>
            개 있습니다
          </MypageRecentListText>
          <MypageDataListWrapper>
            {data &&
              !loading &&
              data?.user?.finbigView?.map((data) => (
                <MypageDataWrapper key={data?.id}>
                  <MypageDataThumbnail
                    src={String(data?.thumbnail)}
                    onClick={() => {
                      navigate(`/data/${data?.id}`);
                    }}
                  />
                  <MypageDataTitle
                    onClick={() => {
                      navigate(`/data/${data?.id}`);
                    }}
                  >
                    {data?.title}
                  </MypageDataTitle>
                  <MypageDataDescription
                    onClick={() => {
                      navigate(`/data/${data?.id}`);
                    }}
                  >
                    {data?.description}
                  </MypageDataDescription>
                  <MypageDataBtnWrapper>
                    {data?.isBest && (
                      <MypageDataBestBtn>Best</MypageDataBestBtn>
                    )}
                    <MypageDataUpdateBtn>Update</MypageDataUpdateBtn>
                  </MypageDataBtnWrapper>
                </MypageDataWrapper>
              ))}
            {new Array(3 - blackLength).fill(1).map((__, index) => (
              <DataListImgBlank
                key={index}
                style={{ border: "none" }}
              ></DataListImgBlank>
            ))}
          </MypageDataListWrapper>
        </MypageBodyColumn>
      </MypageBody>
    </MypageRecentWrapper>
  );
};

export default MypageRecentPresenter;
