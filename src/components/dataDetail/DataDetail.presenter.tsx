import {
  DataDetailBigImg,
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

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

const DataDetailPresenter = () => {
  return (
    <DataDetailWrapper>
      <DataDetailBodyWrapper>
        <DataDetailImg />
        <DataDetailContentsWrapper>
          <DataDetailTitle>콜라보올인원 스코어 데이터</DataDetailTitle>
          <DataDetailContents>
            여기에는 아마 데이터 상품에 대한 설명이 조금 들어가겠지 여기에는 마
            데이터 상품에 대한 설명이 조금 들어가겠지 여기에는
          </DataDetailContents>
          <DataDetailTableWrapper style={{ borderTop: "1px solid #c1c1c1" }}>
            <DataDetailTableTitle>제공유형</DataDetailTableTitle>
            <DataDetailTableContents>ZIP(csv)</DataDetailTableContents>
            <DataDetailTableTitle>용량</DataDetailTableTitle>
            <DataDetailTableContents>251.8MB</DataDetailTableContents>
          </DataDetailTableWrapper>
          <DataDetailTableWrapper>
            <DataDetailTableTitle>최초 등록일</DataDetailTableTitle>
            <DataDetailTableContents>21.11.05</DataDetailTableContents>
            <DataDetailTableTitle>업데이트 주기</DataDetailTableTitle>
            <DataDetailTableContents>주 단위</DataDetailTableContents>
          </DataDetailTableWrapper>
          <DataDetailPeriodWrapper>
            <DataDetailPeriodTitle>데이터 기간</DataDetailPeriodTitle>
            <RangePicker
              defaultValue={[
                moment(new Date(), dateFormat),
                moment(new Date(), dateFormat),
              ]}
              format={dateFormat}
            />
          </DataDetailPeriodWrapper>
          <DataDetailBtnWrapper>
            <DataDetailDownBtn>데이터 다운로드</DataDetailDownBtn>
            <DataDetailLikeBtn>
              <DataDetailLikeImg src={SunSVG} />
            </DataDetailLikeBtn>
          </DataDetailBtnWrapper>
        </DataDetailContentsWrapper>
      </DataDetailBodyWrapper>
      <DataDetailDivider />
      <DataDetailBigImg />
      <DataDetailOther>관련 상품</DataDetailOther>
      <DataDetailOhterWrapper>
        <DataDetailOhterContentsWrapper>
          <DataDetailOtherImg />
          <DataDetailTitleWrapper>
            <DataDetailOtherTilte>콜라보 머시기</DataDetailOtherTilte>
            <DataDetailOtherContents>
              내용
              머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기
            </DataDetailOtherContents>
          </DataDetailTitleWrapper>
        </DataDetailOhterContentsWrapper>
        <DataDetailOhterContentsWrapper>
          <DataDetailOtherImg />
          <DataDetailTitleWrapper>
            <DataDetailOtherTilte>콜라보 머시기</DataDetailOtherTilte>
            <DataDetailOtherContents>
              내용
              머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기
            </DataDetailOtherContents>
          </DataDetailTitleWrapper>
        </DataDetailOhterContentsWrapper>
        <DataDetailOhterContentsWrapper>
          <DataDetailOtherImg />
          <DataDetailTitleWrapper>
            <DataDetailOtherTilte>콜라보 머시기</DataDetailOtherTilte>
            <DataDetailOtherContents>
              내용
              머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기
            </DataDetailOtherContents>
          </DataDetailTitleWrapper>
        </DataDetailOhterContentsWrapper>
      </DataDetailOhterWrapper>
    </DataDetailWrapper>
  );
};

export default DataDetailPresenter;
