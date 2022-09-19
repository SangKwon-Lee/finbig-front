import dayjs from "dayjs";
import { useNavigate } from "react-router";
import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import {
  DataListImgBlank,
  MypageDataBestBtn,
  MypageDataBtnWrapper,
  MypageDataDescription,
  MypageDataListWrapper,
  MypageDataThumbnail,
  MypageDataTitle,
  MypageDataUpdateBtn,
  MypageDataWrapper,
} from "../recent/MypageRecent.style";
import {
  MypageBody,
  MypageMainTitle,
  MypageMainUsername,
  MypageMainWrapper,
  MypageBodyColumn,
  MypageMainTableWrapper,
  MypageMainTableHeader,
  MypageMainTableContents,
  MypageMainDownloadWrapper,
  MypageMainDownloadTitle,
  MypageMainPlus,
  MypageMainLine,
} from "./MypageMain.style";
import { D_day } from "../../../utils/D_day";
import { UserQuery } from "../../../commons/graphql/generated";
interface IMypageMainProps {
  data?: UserQuery | undefined;
  blackLength: number;
}

const MypageMainPresenter: React.FC<IMypageMainProps> = ({
  data,
  blackLength,
}) => {
  const navigate = useNavigate();
  return (
    <MypageMainWrapper>
      <MypageBody>
        <MypageLayoutContainer menu={"mypage"} />
        <MypageBodyColumn>
          <MypageMainTitle>
            <MypageMainUsername>{data?.user?.username}</MypageMainUsername>님
            안녕하세요!
          </MypageMainTitle>
          <MypageMainTableWrapper>
            <MypageMainTableHeader>상품 명</MypageMainTableHeader>
            <MypageMainTableContents>
              {data?.user?.subscription_histories &&
              data?.user?.subscription_histories.length > 0 &&
              data?.user?.isSubscribe
                ? data?.user?.subscription_histories[
                    data?.user?.subscription_histories.length - 1
                  ]?.title
                : "구독중인 상품이 없습니다"}
            </MypageMainTableContents>
          </MypageMainTableWrapper>
          <MypageMainTableWrapper style={{ borderBottom: "1px solid #c1c1c1" }}>
            <MypageMainTableHeader>구독 기간</MypageMainTableHeader>
            <MypageMainTableContents>
              {data?.user?.isSubscribe
                ? `${dayjs(data?.user?.subscriptionDate).format(
                    "YYYY.MM.DD"
                  )} ~ ${dayjs(data?.user?.expirationDate).format(
                    "YYYY.MM.DD"
                  )} 만료일 : ${D_day(data?.user?.expirationDate)}일`
                : "구독 중인 상품이 없습니다"}
            </MypageMainTableContents>
          </MypageMainTableWrapper>
          <MypageMainDownloadWrapper>
            <MypageMainDownloadTitle>다운로드 내역</MypageMainDownloadTitle>
            <MypageMainPlus
              onClick={() => {
                navigate(`/mypage/download`);
              }}
            >
              더 보기 +
            </MypageMainPlus>
          </MypageMainDownloadWrapper>
          <MypageMainLine />
          <MypageDataListWrapper>
            {Number(data?.user?.finbig_downloads?.length) > 0 ? (
              data?.user?.finbig_downloads?.slice(0, 6).map((data) => (
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
                    {data?.isUpdate && (
                      <MypageDataUpdateBtn>Update</MypageDataUpdateBtn>
                    )}
                  </MypageDataBtnWrapper>
                </MypageDataWrapper>
              ))
            ) : (
              <MypageDataTitle>다운로드 내역이 없습니다</MypageDataTitle>
            )}
            {new Array(3 - blackLength).fill(1).map((__, index) => (
              <DataListImgBlank
                key={index}
                style={{ border: "none" }}
              ></DataListImgBlank>
            ))}
          </MypageDataListWrapper>
        </MypageBodyColumn>
      </MypageBody>
    </MypageMainWrapper>
  );
};

export default MypageMainPresenter;
