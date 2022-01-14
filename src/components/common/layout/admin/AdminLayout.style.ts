import styled from "@emotion/styled";

interface AdminLayouStyleProps {
  isActive?: boolean;
}

export const AdminLayoutWrapper = styled.div`
  width: 240px;
  min-height: 1200px;
  background-color: #262246;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  height: 100vh;
`;

export const AdminLayoutLogo = styled.img`
  width: 142px;
`;

export const AdminLayoutMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  border-top: 1px solid #787782;
`;

export const AdminLayoutMenuTitle = styled.div`
  font-size: 20px;
  color: ${(props: AdminLayouStyleProps) =>
    props.isActive ? "white" : "#9d99bb"};
  font-family: ${(props: AdminLayouStyleProps) =>
    props.isActive ? "SpoqaHanSans-Bold" : "SpoqaHanSans-Regular"};
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 20px;
  border-bottom: 1px solid #787782;
  cursor: pointer;
`;
