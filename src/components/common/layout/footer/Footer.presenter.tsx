import {
  FooterBottomLeft,
  FooterBottomContentsWrapper,
  FooterBottomRight,
  FooterBottomRightWrapper,
  FooterBottomWrapper,
  FooterContents,
  FooterContentsWrapper,
  FooterLogo,
  FooterMenu,
  FooterMenuTitleWrapper,
  FooterMenuWrapper,
  FooterWrapper,
} from "./Footer.style";
import LogoSVG from "../../../../assets/images/logo.svg";
import { useNavigate } from "react-router";
const FooterPresenter = () => {
  const navigate = useNavigate();

  return (
    <>
      <FooterWrapper>
        <FooterMenuWrapper>
          <FooterLogo src={LogoSVG}></FooterLogo>
          <FooterMenuTitleWrapper>
            <FooterMenu
              onClick={() => {
                navigate(`/dataList`);
              }}
            >
              데이터상품
            </FooterMenu>
            <FooterMenu
              onClick={() => {
                navigate(`/license`);
              }}
            >
              데이터 시각화/활용
            </FooterMenu>
            <FooterMenu
              onClick={() => {
                navigate(`/license`);
              }}
            >
              구독 구매
            </FooterMenu>
          </FooterMenuTitleWrapper>
        </FooterMenuWrapper>
        <FooterContentsWrapper>
          <FooterContents>
            사업자등록번호: 123-86-44800 | 통신판매번호: 2017-서울영등포-0758 |
            대표: 손상현,이승엽
            <br />
            서울특별시 영등포구 의사당대로 83.오투타워 서울핀테크랩 19층
            <br />
            전화: 02-719-5500 | 이메일 support@innofin.co.kr
          </FooterContents>
        </FooterContentsWrapper>
      </FooterWrapper>
      <FooterBottomWrapper>
        <FooterBottomContentsWrapper>
          <FooterBottomLeft>
            © 2021 INNOFIN. All Rights Reserved
          </FooterBottomLeft>
          <FooterBottomRightWrapper>
            <FooterBottomRight>이용약관</FooterBottomRight>
            <FooterBottomRight>개인정보취급처리방침</FooterBottomRight>
          </FooterBottomRightWrapper>
        </FooterBottomContentsWrapper>
      </FooterBottomWrapper>
    </>
  );
};

export default FooterPresenter;
