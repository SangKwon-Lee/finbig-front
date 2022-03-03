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
      <LicenseTitle>라이센스 구매</LicenseTitle>
      <LicenseTableHeaderWrapper>
        <LicenseTableLeftHeader>서비스 명</LicenseTableLeftHeader>
        <LicenseTableRightHeader>
          금융빅데이터 구독 상품
        </LicenseTableRightHeader>
      </LicenseTableHeaderWrapper>
      <LicenseTableContentsWrapper>
        <LicenseTablePeriodTitle>사용기간</LicenseTablePeriodTitle>
        <LicenseTablePeriodContent>
          <LicenseTablePeriodNumber>1</LicenseTablePeriodNumber> 개월
        </LicenseTablePeriodContent>
        <LicenseTablePeriodContent>
          <LicenseTablePeriodNumber>3</LicenseTablePeriodNumber> 개월
        </LicenseTablePeriodContent>
        <LicenseTablePeriodContent>
          <LicenseTablePeriodNumber>6</LicenseTablePeriodNumber> 개월
        </LicenseTablePeriodContent>
      </LicenseTableContentsWrapper>
      <LicenseTableContentsWrapper>
        <LicenseTablePriceTitle>사용기간</LicenseTablePriceTitle>
        <LicenseTablePriceContent>330,000원</LicenseTablePriceContent>
        <LicenseTablePriceContent>900,000원</LicenseTablePriceContent>
        <LicenseTablePriceContent>1,650,000원</LicenseTablePriceContent>
      </LicenseTableContentsWrapper>
      <LicenseTableContentsWrapper>
        <LicenseTableBuyTitle>사용기간</LicenseTableBuyTitle>
        <LicenseTableBuyContent>
          <LicenseTableBuyBtn
            onClick={() => {
              handleOpen();
              setPaymentInput({
                ...paymentInput,
                title: "1개월 프리미엄 구독 상품",
                period: 1,
                price: 1,
              });
            }}
          >
            구매
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
                price: 1,
              });
            }}
          >
            구매
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
                price: 1,
              });
            }}
          >
            구매
          </LicenseTableBuyBtn>
        </LicenseTableBuyContent>
      </LicenseTableContentsWrapper>
      <LicenseNoticeWrapper>
        <LicenseNoticeTitle>라이센스 유의 사항</LicenseNoticeTitle>
        <LicenseNoticeContents>
          - 모든 라이선스 사용 기반은 국내(한국, 한국어)입니다. 해외 사용 시
          국가/언어 당 별도 협의가 필요합니다. <br />- ‘자본시장 빅데이터
          플랫폼’에서 제공되는 데이터는 재배포를 할 수 없습니다. <br />-
          제공되는 데이터는 구독서비스 가입기간 동안 다운로드 받을 수 있으며,
          다운로드 받은 콘텐츠는 구독서비스 가입기간 동안만 사용이 가능합니다.
          <br />- 기간이 만료된 경우에는 다운로드 받은 데이터를 사용하실 수
          없으며 즉시 삭제하셔야 합니다. 다만, 회원 가입기간 동안 웹사이트 및
          제작물에 사용하였던 콘텐츠는 기간이 만료되더라도 편집( 수정) 또는
          상업적으로 재사용하지 않는 범위 내에서 계속 게시할 수 있습니다.
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
