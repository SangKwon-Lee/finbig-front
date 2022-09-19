import {
  LicenseModalBtn,
  LicenseModalBtnWrapper,
  LicenseModalCancelBtn,
  LicenseModalText,
  LicenseModalTilte,
  LicenseNoticeContents,
  LicenseNoticeTitle,
  LicenseNoticeWrapper,
  LicenseTableBuyBtn,
  LicenseTableBuyContent,
  LicenseTableBuyTitle,
  LicenseTableContentsWrapper,
  LicenseTableHeaderWrapper,
  LicenseTableLeftHeader,
  LicenseTablePeriodContent,
  LicenseTablePeriodNumber,
  LicenseTablePeriodTitle,
  LicenseTablePriceContent,
  LicenseTablePriceTitle,
  LicenseTableRightHeader,
  LicenseTitle,
  LicenseWrapper,
} from "./License.style";
import { Box, Modal } from "@mui/material";
import { priceToString } from "../../utils/priceToString";

interface ILicenseProps {
  open: boolean;
  paymentInput: {
    title: string;
    price: number;
    period: number;
  };
  setPaymentInput: React.Dispatch<
    React.SetStateAction<{
      title: string;
      price: number;
      period: number;
    }>
  >;
  handleBuy: () => void;
  handleOpen: () => void;
  handleClose: () => void;
}

const LicensePresenter: React.FC<ILicenseProps> = ({
  open,
  paymentInput,
  setPaymentInput,
  handleBuy,
  handleOpen,
  handleClose,
}) => {
  return (
    <LicenseWrapper>
      <LicenseTitle>빅데이터 구독</LicenseTitle>
      <LicenseTableHeaderWrapper>
        <LicenseTableLeftHeader>서비스 명</LicenseTableLeftHeader>
        <LicenseTableRightHeader>
          자본시장 빅데이터 구독 상품
        </LicenseTableRightHeader>
      </LicenseTableHeaderWrapper>
      <LicenseTableContentsWrapper>
        <LicenseTablePeriodTitle>이용기간</LicenseTablePeriodTitle>
        <LicenseTablePeriodContent>
          <LicenseTablePeriodNumber>1</LicenseTablePeriodNumber> 개월
        </LicenseTablePeriodContent>
        <LicenseTablePeriodContent>
          <LicenseTablePeriodNumber>3</LicenseTablePeriodNumber> 개월
        </LicenseTablePeriodContent>
        <LicenseTablePeriodContent>
          <LicenseTablePeriodNumber>6</LicenseTablePeriodNumber> 개월
        </LicenseTablePeriodContent>
        <LicenseTablePeriodContent>
          <LicenseTablePeriodNumber>12</LicenseTablePeriodNumber> 개월
        </LicenseTablePeriodContent>
      </LicenseTableContentsWrapper>
      <LicenseTableContentsWrapper>
        <LicenseTablePriceTitle>이용금액</LicenseTablePriceTitle>
        <LicenseTablePriceContent>200,000원</LicenseTablePriceContent>
        <LicenseTablePriceContent>300,000원</LicenseTablePriceContent>
        <LicenseTablePriceContent>500,000원</LicenseTablePriceContent>
        <LicenseTablePriceContent>800,000원</LicenseTablePriceContent>
      </LicenseTableContentsWrapper>
      <LicenseTableContentsWrapper>
        <LicenseTableBuyTitle>구독</LicenseTableBuyTitle>
        <LicenseTableBuyContent>
          <LicenseTableBuyBtn
            onClick={() => {
              handleOpen();
              setPaymentInput({
                ...paymentInput,
                title: "1개월 프리미엄 구독 상품",
                period: 1,
                price: 200000,
              });
            }}
          >
            구독
          </LicenseTableBuyBtn>
        </LicenseTableBuyContent>
        <LicenseTableBuyContent>
          <LicenseTableBuyBtn
            onClick={() => {
              handleOpen();
              setPaymentInput({
                ...paymentInput,
                title: "3개월 프리미엄 구독 상품",
                period: 3,
                price: 300000,
              });
            }}
          >
            구독
          </LicenseTableBuyBtn>
        </LicenseTableBuyContent>
        <LicenseTableBuyContent>
          <LicenseTableBuyBtn
            onClick={() => {
              handleOpen();
              setPaymentInput({
                ...paymentInput,
                title: "6개월 프리미엄 구독 상품",
                period: 6,
                price: 500000,
              });
            }}
          >
            구독
          </LicenseTableBuyBtn>
        </LicenseTableBuyContent>
        <LicenseTableBuyContent>
          <LicenseTableBuyBtn
            onClick={() => {
              handleOpen();
              setPaymentInput({
                ...paymentInput,
                title: "12개월 프리미엄 구독 상품",
                period: 12,
                price: 800000,
              });
            }}
          >
            구독
          </LicenseTableBuyBtn>
        </LicenseTableBuyContent>
      </LicenseTableContentsWrapper>
      <LicenseNoticeWrapper>
        <LicenseNoticeTitle>구독 결제 유의 사항</LicenseNoticeTitle>
        <LicenseNoticeContents>
          - 현재 구독 결제가 가능한 신용카드는 비씨카드, 삼성카드, 롯데카드 등
          세 가지입니다. <br />- 모든 구독 결제 사용 기반은 국내(한국,
          한국어)이며 해외 사용시 별도 협의가 필요합니다. <br />- '자본시장
          빅데이터 플랫폼'에서 구독한 데이터를 일부 또는 전부를 직접적인 배포나
          판매, 대여 등의 형태로 '제 3자'에게 제공할 수 없습니다.
          <br />- '자본시장 빅데이터 플랫폼'의 데이터는 구독서비스 가입기간 동안
          다운로드를 할 수 있으나 '구독자'의 데이터 베이스 형태로 구축할 수
          없습니다.
        </LicenseNoticeContents>
      </LicenseNoticeWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LicenseModalTilte>결제 상품 확인</LicenseModalTilte>
          <LicenseModalText>상품명: {paymentInput.title}</LicenseModalText>
          <LicenseModalText>
            가격: {priceToString(String(paymentInput.price))} 원
          </LicenseModalText>
          <LicenseModalText>
            구독 기간: {paymentInput.period} 개월
          </LicenseModalText>
          <LicenseModalBtnWrapper>
            <LicenseModalCancelBtn onClick={handleClose}>
              취소
            </LicenseModalCancelBtn>
            <LicenseModalBtn onClick={handleBuy}>결제</LicenseModalBtn>
          </LicenseModalBtnWrapper>
        </Box>
      </Modal>
    </LicenseWrapper>
  );
};

export default LicensePresenter;
