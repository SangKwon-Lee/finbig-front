import {
  // DataDetailBigImg,
  DataDetailBodyWrapper,
  DataDetailBtnWrapper,
  DataDetailContents,
  DataDetailContentsWrapper,
  DataDetailDivider,
  DataDetailDownBtn,
  DataDetailImg,
  DataDetailOhterContentsWrapper,
  DataDetailOhterWrapper,
  DataDetailOther,
  DataDetailOtherContents,
  DataDetailOtherImg,
  DataDetailOtherTilte,
  DataDetailPeriodText,
  DataDetailPeriodTitle,
  DataDetailPeriodWrapper,
  DataDetailTableContents,
  DataDetailTableTitle,
  DataDetailTableWrapper,
  DataDetailTitle,
  DataDetailTitleWrapper,
  DataDetailWrapper,
  ViewerWrapper,
} from "./DataDetail.style";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
import moment from "moment";
import { Viewer } from "@toast-ui/react-editor";
import { useNavigate } from "react-router";
import { FinbigQuery } from "../../commons/graphql/generated";

const { RangePicker } = DatePicker;

interface DataDetailProps {
  data?: FinbigQuery | undefined;
  date: {
    startDate: string;
    endDate: string;
  };
  loading: boolean;
  handleDate: (e: any) => void;
  handleDownLoad: (dataId: any) => Promise<void>;
}

const DataDetailPresenter: React.FC<DataDetailProps> = ({
  data,
  date,
  loading,
  handleDate,
  handleDownLoad,
}) => {
  const dateFormat =
    data?.finbig?.period === "일 단위"
      ? "YYYY/MM/DD"
      : data?.finbig?.period === "월 단위"
      ? "YYYY/MM"
      : "YYYY";
  const navigate = useNavigate();
  return (
    <DataDetailWrapper>
      <DataDetailBodyWrapper>
        <DataDetailImg src={String(data?.finbig?.thumbnail)} />
        <DataDetailContentsWrapper>
          <DataDetailTitle>{data?.finbig?.title}</DataDetailTitle>
          <DataDetailContents>{data?.finbig?.description}</DataDetailContents>
          <DataDetailTableWrapper style={{ borderTop: "1px solid #c1c1c1" }}>
            <DataDetailTableTitle>제공유형</DataDetailTableTitle>
            <DataDetailTableContents>ZIP(csv)</DataDetailTableContents>
            <DataDetailTableTitle>업데이트 주기</DataDetailTableTitle>
            <DataDetailTableContents>
              {data?.finbig?.period}
            </DataDetailTableContents>
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
              value={[
                moment(date.startDate, dateFormat),
                moment(date.endDate, dateFormat),
              ]}
              format={dateFormat}
            />
          </DataDetailPeriodWrapper>
          {data?.finbig?.period === "월 단위" ? (
            <>
              <DataDetailPeriodText>
                ※ 해당 데이터는 조회할 월만 지정해도 다운로드 가능
              </DataDetailPeriodText>
            </>
          ) : (
            <></>
          )}
          {data?.finbig?.period === "연 단위" ? (
            <>
              <DataDetailPeriodText>
                ※ 해당 데이터는 조회할 연도만 지정해도 다운로드 가능
              </DataDetailPeriodText>
            </>
          ) : (
            <></>
          )}
          {data?.finbig?.downloadPeriod ? (
            <>
              <DataDetailPeriodText>
                ※ 해당 데이터는 {data?.finbig?.downloadPeriod} 이하 단위로
                다운로드 가능
              </DataDetailPeriodText>
              <DataDetailPeriodText
                style={{
                  fontSize: "11px",
                  marginTop: "-16px",
                  color: "#333",
                }}
              >
                장기데이터 필요시 이메일(support@innofin.co.kr) 주세요
              </DataDetailPeriodText>
            </>
          ) : (
            <DataDetailPeriodText></DataDetailPeriodText>
          )}
          <DataDetailBtnWrapper>
            <DataDetailDownBtn onClick={() => handleDownLoad(data?.finbig?.id)}>
              데이터 다운로드
            </DataDetailDownBtn>
          </DataDetailBtnWrapper>
          {loading && <div>다운로드 중...</div>}
        </DataDetailContentsWrapper>
      </DataDetailBodyWrapper>
      <DataDetailDivider />
      {data?.finbig?.contents && (
        <ViewerWrapper>
          <Viewer initialValue={data?.finbig?.contents} />
        </ViewerWrapper>
      )}
      <DataDetailOther>관련 상품</DataDetailOther>
      <DataDetailOhterWrapper>
        {data?.finbig?.relationFinbigs?.map((data) => (
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
    </DataDetailWrapper>
  );
};

export default DataDetailPresenter;
