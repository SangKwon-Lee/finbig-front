import styled from "@emotion/styled";

export const VisualListWrapper = styled.div`
  min-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 100px;
`;

export const VisualListMainTitle = styled.div`
  font-size: 20px;
`;

export const VisualListBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  justify-content: space-between;
  margin-top: 70px;
`;

export const VisualListContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VisualListImg = styled.img`
  width: 280px;
  height: 320px;
  cursor: pointer;
`;

export const VisualListImgBlank = styled.div`
  width: 280px;
  height: 320px;
  border: none;
  outline: none;
`;

export const VisualListType = styled.div`
  font-size: 14px;
  margin-top: 25px;
  color: #999999;
  margin-bottom: 4px;
`;

export const VisualListTitle = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  margin-bottom: 26px;
  cursor: pointer;
  width: 280px;
  flex-wrap: wrap;
  /* display: flex; */
  text-align: center;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const VisualListCreateAt = styled.div`
  font-size: 12px;
  color: #999999;
  margin-bottom: 80px;
`;

export const VisualListPaginationWrapper = styled.div``;
