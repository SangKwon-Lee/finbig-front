import { useNavigate } from "react-router";
import { UserQuery } from "../../../commons/graphql/generated";
import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import {
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
} from "../recent/MypageRecent.style";
import { MypageBody, MypageDownloadWrapper } from "./MypageDownload.style";

interface MypageDownloadProps {
  data?: UserQuery | undefined;
  blackLength: number;
}

const MypageDownloadPresenter: React.FC<MypageDownloadProps> = ({
  data,
  blackLength,
}) => {
  const navigate = useNavigate();
  return (
    <MypageDownloadWrapper>
      <MypageBody>
        <MypageLayoutContainer menu="download" />
        <MypageBodyColumn>
          <MypageRecentListText>
            상품이 모두
            <MypageRecentListNumber>
              &nbsp; {data?.user?.finbigDownload?.length}
            </MypageRecentListNumber>
            개 있습니다
          </MypageRecentListText>
          <MypageDataListWrapper>
            {data &&
              data?.user?.finbigDownload?.map((data) => (
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
    </MypageDownloadWrapper>
  );
};

export default MypageDownloadPresenter;
