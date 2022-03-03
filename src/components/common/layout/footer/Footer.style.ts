import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  display: flex;
  min-width: 1100px;
  width: 100%;
  height: 333px;
  padding-top: 137px;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #cccccc;
`;

export const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  align-items: flex-end;
  margin-bottom: 57px;
`;

export const FooterLogo = styled.img`
  cursor: pointer;
`;

export const FooterMenuTitleWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export const FooterMenu = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  cursor: pointer;
`;

export const FooterContentsWrapper = styled.div`
  width: 1100px;
`;

export const FooterContents = styled.div`
  font-size: 14px;
  color: #999999;
`;

export const FooterBottomWrapper = styled.div`
  min-width: 1100px;
  width: 100%;
  height: 64px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterBottomContentsWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

export const FooterBottomLeft = styled.div`
  font-size: 14px;
  color: #333333;
`;

export const FooterBottomRightWrapper = styled.div`
  width: 221px;
  display: flex;
  justify-content: space-between;
  color: #333333;
  font-size: 14px;
`;

export const FooterBottomRight = styled.div`
  color: #333333;
  cursor: pointer;
`;
