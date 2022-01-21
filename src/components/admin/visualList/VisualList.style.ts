import styled from "@emotion/styled";

export const AdminVisualListWrapper = styled.div`
  min-height: 1200px;
  background-color: #f2f2f2;
  display: flex;
  min-width: 1920px;
  height: 100vh;
`;
export const AdminVisualListBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 85px;
  width: 100%;
  background-color: #f2f2f2;
  max-width: 1920px;
`;

export const AdminVisualListTitle = styled.div`
  font-family: SpoqaHanSans-Bold;
  font-size: 32px;
  margin-bottom: 16px;
`;

export const AdminVisualListTableWrapper = styled.div`
  width: 100%;
`;

export const AdminVisualListTableHeaderWrapper = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  background-color: #e9e9e9;
  border-left: 1px solid #cccccc;
`;

export const AdminVisualListTableHeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.5;
  border-right: 1px solid #cccccc;
  text-align: center;
`;

export const AdminVisualListPreview = styled.div`
  cursor: pointer;
`;

export const AdminVisualCheckBox = styled.input``;

export const AdminVisualBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`;

export const AdminVisualSearchWrapper = styled.div`
  width: 379px;
  height: 42px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0px 18px;
  align-self: center;
  margin-top: 40px;
`;

export const AdminVisualInputSearch = styled.input`
  outline: none;
  border: none;
  width: 70%;
`;

export const AdminVisaulSearchIcon = styled.img`
  width: 20px;
`;

export const AdminVisualDeleteBtn = styled.button`
  width: 137px;
  height: 46px;
  background-color: #333333;
  color: white;
  font-size: 14px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const AdminVisualCreateBtn = styled.button`
  width: 137px;
  height: 46px;
  background-color: #4033a2;
  color: white;
  font-size: 14px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const AdminVisualPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const AdminVisualModalBtn = styled.button`
  width: 137px;
  height: 46px;
  background-color: #4033a2;
  color: white;
  font-size: 14px;
  cursor: pointer;
  border: none;
  outline: none;
`;
