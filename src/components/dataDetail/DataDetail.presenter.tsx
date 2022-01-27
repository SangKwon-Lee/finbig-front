import {
  // DataDetailBigImg,
  DataDetailBodyWrapper,
  DataDetailBtnWrapper,
  DataDetailContents,
  DataDetailContentsWrapper,
  DataDetailDivider,
  DataDetailDownBtn,
  DataDetailImg,
  DataDetailLikeBtn,
  DataDetailLikeImg,
  DataDetailOhterContentsWrapper,
  DataDetailOhterWrapper,
  DataDetailOther,
  DataDetailOtherContents,
  DataDetailOtherImg,
  DataDetailOtherTilte,
  DataDetailPeriodTitle,
  DataDetailPeriodWrapper,
  DataDetailTableContents,
  DataDetailTableTitle,
  DataDetailTableWrapper,
  DataDetailTitle,
  DataDetailTitleWrapper,
  DataDetailWrapper,
} from "./DataDetail.style";
import "antd/dist/antd.css";
import SunSVG from "../../assets/images/sun.svg";
import { DatePicker } from "antd";
import moment from "moment";
import { Finbig, Maybe } from "../../commons/types/generated/types";
import { Viewer } from "@toast-ui/react-editor";
import { useNavigate } from "react-router";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

interface DataDetailProps {
  data?: Maybe<Finbig> | undefined;
  handleDate: (e: any) => void;
  handleDownLoad: (dataId: any) => Promise<void>;
}

const DataDetailPresenter: React.FC<DataDetailProps> = ({
  data,
  handleDate,
  handleDownLoad,
}) => {
  const navigate = useNavigate();
  return (
    <DataDetailWrapper>
      <DataDetailBodyWrapper>
        <DataDetailImg src={String(data?.thumbnail)} />
        <DataDetailContentsWrapper>
          <DataDetailTitle>{data?.title}</DataDetailTitle>
          <DataDetailContents>{data?.description}</DataDetailContents>
          <DataDetailTableWrapper style={{ borderTop: "1px solid #c1c1c1" }}>
            <DataDetailTableTitle>제공유형</DataDetailTableTitle>
            <DataDetailTableContents>ZIP(csv)</DataDetailTableContents>
            <DataDetailTableTitle>업데이트 주기</DataDetailTableTitle>
            <DataDetailTableContents>{data?.period}</DataDetailTableContents>
          </DataDetailTableWrapper>
          {/* <DataDetailTableWrapper>
            <DataDetailTableTitle>용량</DataDetailTableTitle>
            <DataDetailTableContents>251.8MB</DataDetailTableContents>
            <DataDetailTableTitle>최초 등록일</DataDetailTableTitle>
            <DataDetailTableContents>21.11.05</DataDetailTableContents>
          </DataDetailTableWrapper> */}
          <DataDetailPeriodWrapper>
            <DataDetailPeriodTitle>데이터 기간</DataDetailPeriodTitle>
            <RangePicker
              onChange={handleDate}
              defaultValue={[
                moment(new Date(), dateFormat),
                moment(new Date(), dateFormat),
              ]}
              format={dateFormat}
            />
          </DataDetailPeriodWrapper>
          <DataDetailBtnWrapper>
            <DataDetailDownBtn onClick={() => handleDownLoad(data?.id)}>
              데이터 다운로드
            </DataDetailDownBtn>
            <DataDetailLikeBtn>
              <DataDetailLikeImg src={SunSVG} />
            </DataDetailLikeBtn>
          </DataDetailBtnWrapper>
        </DataDetailContentsWrapper>
      </DataDetailBodyWrapper>
      <DataDetailDivider />
      {/* <DataDetailBigImg /> */}
      {data?.contents && <Viewer initialValue={data.contents} />}
      <DataDetailOther>관련 상품</DataDetailOther>
      <DataDetailOhterWrapper>
        {data?.relationFinbigs?.map((data) => (
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
    </DataDetailWrapper>
  );
};

export default DataDetailPresenter;
