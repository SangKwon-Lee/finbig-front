import styled from "@emotion/styled";

export const AdminUsersWrapper = styled.div`
  min-height: 1200px;
  background-color: #f2f2f2;
  height: 100vh;
  display: flex;
  min-width: 1700px;
`;

export const AdminUsersBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 85px;
  width: 100%;
`;

export const AdminUsersTitle = styled.div`
  font-family: SpoqaHanSans-Bold;
  font-size: 32px;
  margin-bottom: 40px;
`;

export const AdminUsersTableWrapper = styled.div`
  border-left: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
`;

export const AdminUsersTableHeaderWrapper = styled.div`
  border-top: 1px solid #707070;
  background-color: #e9e9e9;
  height: 57px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const AdminUsersTableHeaderTitle = styled.div`
  font-size: 16px;
  height: 100%;
  border-right: 1px solid #cccccc;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const AdminUsersTableContentsWrapper = styled.div`
  height: 57px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const AdminUsersTableContents = styled.div`
  font-size: 16px;
  height: 100%;
  border-right: 1px solid #cccccc;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const AdminUsersTableEditBtn = styled.button`
  width: 88px;
  height: 36px;
  background-color: white;
  border: 1px solid #9b9b9b;
  font-size: 14px;
  border-radius: 5px;
  margin-right: 15px;
  outline: none;
  cursor: pointer;
`;

export const AdminUsersTableDeleteBtn = styled.button`
  width: 88px;
  height: 36px;
  background-color: #262246;
  border: none;
  font-size: 14px;
  border-radius: 5px;
  color: white;
  outline: none;
  cursor: pointer;
`;
