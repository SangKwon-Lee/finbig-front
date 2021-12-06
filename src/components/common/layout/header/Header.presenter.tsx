import {
  HeaderWrapper,
  Logo,
  MenuSVGWrapper,
  MenuTitle,
  MenuTitleWrapper,
  SearchInput,
  SearchInputWrapper,
  SearchWrapper,
  SVGIcon,
  SVGWrapper,
} from "./Header.style";
import LogoSVG from "../../../../assets/images/logo.svg";
import SearchSVG from "../../../../assets/images/search.svg";
import UserSVG from "../../../../assets/images/user.svg";
import MarketSVG from "../../../../assets/images/market.svg";
import LockSVG from "../../../../assets/images/lock.svg";
import XSVG from "../../../../assets/images/x.svg";
import { useNavigate } from "react-router";

interface IHeaderProps {
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  handleSearchWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderPresenter: React.FC<IHeaderProps> = ({
  isSearch,
  setIsSearch,
  handleSearchWord,
  search,
  setSearch,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderWrapper>
        <Logo
          src={LogoSVG}
          onClick={() => {
            navigate(`/`);
          }}
        ></Logo>
        <MenuSVGWrapper>
          <MenuTitleWrapper>
            <MenuTitle
              onClick={() => {
                navigate(`/dataList`);
              }}
            >
              데이터 상품
            </MenuTitle>
            <MenuTitle
              onClick={() => {
                navigate(`/visualList`);
              }}
            >
              데이터 시각화/활용
            </MenuTitle>
            <MenuTitle
              onClick={() => {
                navigate(`/license`);
              }}
            >
              구독 구매
            </MenuTitle>
          </MenuTitleWrapper>
          <SVGWrapper>
            <SVGIcon src={UserSVG}></SVGIcon>
            <SVGIcon src={MarketSVG}></SVGIcon>
            <SVGIcon src={LockSVG}></SVGIcon>
            <SVGIcon
              onClick={() => {
                setIsSearch(() => !isSearch);
              }}
              src={isSearch ? XSVG : SearchSVG}
            ></SVGIcon>
          </SVGWrapper>
        </MenuSVGWrapper>
      </HeaderWrapper>
      <SearchWrapper isSearch={isSearch}>
        <SearchInputWrapper isSearch={isSearch}>
          <SearchInput
            value={search}
            onChange={handleSearchWord}
            placeholder="Search"
          />
          <SVGIcon
            onClick={() => {
              setSearch("");
              setIsSearch(() => !isSearch);
              navigate(`/dataList/${search}`);
            }}
            src={SearchSVG}
          />
        </SearchInputWrapper>
      </SearchWrapper>
    </>
  );
};

export default HeaderPresenter;
