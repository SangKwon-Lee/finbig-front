import styled from "@emotion/styled";

interface IMypageLayoutProps {
  menu?: boolean;
}

export const MypageMenuWrapper = styled.div`
  width: 226px;
  min-width: 226px;
  height: 340px;
  border: 2px solid #d7d7d7;
`;

export const MypageTitle = styled.div`
  width: 100%;
  height: 71px;
  background-color: #4033a2;
  color: white;
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #d7d7d7;
  cursor: pointer;
`;

export const MypageBtn = styled.button`
  outline: none;
  background-color: white;
  color: ${(props: IMypageLayoutProps) => (props.menu ? "black" : "#999999")};
  font-size: 14px;
  width: 100%;
  height: 53px;
  border: none;
  border-bottom: 1px solid #d7d7d7;
  cursor: pointer;
  font-family: ${(props: IMypageLayoutProps) =>
    props.menu ? "SpoqaHanSansNeo-Bold" : "SpoqaHanSansNeo-Regular"};
`;

export const MypageContentsWrapper = styled.div`
  width: 821px;
`;
