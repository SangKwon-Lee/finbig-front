import styled from "@emotion/styled";

export const AdminUsersWrapper = styled.div`
  /* min-width: 1680px; */
  width: 100%;
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
