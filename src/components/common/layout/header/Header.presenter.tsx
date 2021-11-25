import {
  HeaderWrapper,
  Logo,
  MenuSVGWrapper,
  MenuTitle,
  MenuTitleWrapper,
  SVGIcon,
  SVGWrapper,
} from "./Header.style";
import LogoSVG from "../../../../assets/images/logo.svg";
import SearchSVG from "../../../../assets/images/searchgray.svg";
import UserSVG from "../../../../assets/images/user.svg";
import MarketSVG from "../../../../assets/images/market.svg";
import LockSVG from "../../../../assets/images/lock.svg";
const HeaderPresenter = () => {
  return (
    <HeaderWrapper>
      <Logo src={LogoSVG}></Logo>
      <MenuSVGWrapper>
        <MenuTitleWrapper>
          <MenuTitle>데이터 상품</MenuTitle>
          <MenuTitle>데이터 시각화/활용</MenuTitle>
          <MenuTitle>구독 구매</MenuTitle>
        </MenuTitleWrapper>
        <SVGWrapper>
          <SVGIcon src={UserSVG}></SVGIcon>
          <SVGIcon src={MarketSVG}></SVGIcon>
          <SVGIcon src={LockSVG}></SVGIcon>
          <SVGIcon src={SearchSVG}></SVGIcon>
        </SVGWrapper>
      </MenuSVGWrapper>
    </HeaderWrapper>
  );
};

export default HeaderPresenter;