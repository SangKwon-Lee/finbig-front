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
          - 12개월 회원의 경우 무제한 다운로드(단, 해외이미지의 경우 1일/150컷
          제한), 6개월 회원의 경우 1일/50컷 다운로드 가능합니다.
          <br /> - 모든 라이선스 사용 기반은 국내(한국, 한국어)입니다. 해외 사용
          시 국가/언어 당 별도 협의가 필요합니다. <br />- 싱글동영상,
          싱글에프터이펙트, 싱글음원, 싱글플러스팩의 경우 별도 라이선스 구매 후
          다운로드 및 이용 가능합니다. <br />- 클립아트코리아에서 제공되는
          폰트는 구매하신 이미지 라이선스와 동일한 사용범위 내에서 사용
          가능합니다. <br />- 다만 일부 폰트의 경우 이미지 라이선스를 구매했을
          지라도 지상파TV, 종편TV, 케이블TV방송, 영화에 사용이 불가하오니,
          반드시 상세페이지 내 폰트별 사용범위를 확인 하시고 이용하시기
          바랍니다.
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
