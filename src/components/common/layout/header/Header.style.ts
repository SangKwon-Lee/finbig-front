import styled from "@emotion/styled";

//* Header

interface IHeaderProps {
  isSearch: boolean;
}

export const HeaderWrapper = styled.div`
  min-width: 1100px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: none;
`;

export const Logo = styled.img`
  margin-right: 51px;
  cursor: pointer;
`;

export const MenuSVGWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 880px;
`;

export const MenuTitleWrapper = styled.div`
  width: 430px;
  display: flex;
  justify-content: space-between;
`;

export const MenuTitle = styled.div`
  cursor: pointer;
`;

export const SVGWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`;

export const SVGIcon = styled.img`
  height: 24px;
  cursor: pointer;
`;

//* Search

export const SearchWrapper = styled.div`
  position: absolute;
  background-color: white;
  height: ${(props: IHeaderProps) => (props.isSearch ? "130px" : "0px")};
  transition: all 0.6s;
  min-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #cccccc;
  padding-top: ${(props: IHeaderProps) => (props.isSearch ? "30px" : "0px")};
  z-index: 100;
`;

export const SearchInputWrapper = styled.div`
  width: 542px;
  height: 46px;
  display: flex;
  transition: all 0.3s;
  opacity: ${(props: IHeaderProps) => (props.isSearch ? "1" : "0")};
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
  border: 1px solid #999999;
  background-color: white;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 12px;
  width: 100%;
`;
