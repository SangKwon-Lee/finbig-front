import {
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

interface ILicenseProps {
  handleBuy: () => void;
}

const LicensePresenter: React.FC<ILicenseProps> = ({ handleBuy }) => {
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
          <LicenseTableBuyBtn onClick={handleBuy}>구매</LicenseTableBuyBtn>
        </LicenseTableBuyContent>
        <LicenseTableBuyContent>
          <LicenseTableBuyBtn>구매</LicenseTableBuyBtn>
        </LicenseTableBuyContent>
        <LicenseTableBuyContent>
          <LicenseTableBuyBtn>구매</LicenseTableBuyBtn>
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
    </LicenseWrapper>
  );
};

export default LicensePresenter;
