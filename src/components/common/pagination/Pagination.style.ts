import styled from "@emotion/styled";

interface PaginationProps {
  isActive?: boolean;
}

//* 페이지 네이션
export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
`;

export const Page = styled.button`
  width: 28px;
  height: 28px;
  border: ${(props: PaginationProps) =>
    props.isActive ? "none" : "1px solid #cccccc"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SpoqaHanSansNeo-Medium;
  font-size: 14px;
  color: ${(props: PaginationProps) => (props.isActive ? "white" : "#999999")};
  cursor: pointer;
  outline: none;
  background-color: ${(props: PaginationProps) =>
    props.isActive ? "black" : "white"};
  margin: 0px 4px 0px 4px;
`;

export const ArrowLeft = styled.img`
  transform: rotate(90deg);
  width: 14px;
  height: 14px;
`;

export const ArrowRight = styled.img`
  transform: rotate(-90deg);
  width: 14px;
  height: 14px;
`;
