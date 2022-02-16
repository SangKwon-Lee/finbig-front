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
  background-color: #f2f2f2;
  max-width: 1920px;
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

export const AdminUsersModalTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #4033a2;
  padding: 0px 34px;
  align-items: center;
  min-height: 66px;
`;

export const AdminUsersModalTitle = styled.div`
  font-family: SpoqaHanSans-Bold;
  color: white;
  font-size: 17px;
`;

export const AdminUsersModalCancel = styled.img`
  cursor: pointer;
`;

export const AdminUsersModalTableHeaderWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 28px;
  margin-right: 28px;
  background-color: #e9e9e9;
  min-height: 57px;
  border: 1px solid #cccccc;
`;

export const AdminUsersModalTableHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #cccccc;
`;

export const AdminUsersModalTableContentsWrapper = styled.div`
  display: flex;
  margin-left: 28px;
  margin-right: 28px;
  border: 1px solid #cccccc;
  border-top: none;
`;

export const AdminUsersModalTableContents = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #cccccc;
  height: 57px;
`;

export const AdminUsersModalTableInput = styled.input`
  width: 80%;
  height: 36px;
  background-color: white;
  border-radius: 5px;
  outline: none;
  border: none;
  border: 1px solid #262246;
  text-align: center;
`;

export const AdminUsersModalTableBtn = styled.button`
  width: 68px;
  height: 36px;
  color: white;
  background-color: #262246;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  align-self: flex-end;
  margin-left: 28px;
  margin-right: 28px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const AdminUsersModalTableRadio = styled.input`
  margin-right: 8px;
  margin-left: 15px;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid darkgray;
  border-radius: 50%;
  outline: none;
  background: white;
  :before {
    content: "";
    display: block;
    width: 60%;
    height: 60%;
    margin: 20% auto;
    border-radius: 50%;
  }
  :checked:before {
    background: #999999;
  }
`;

export const AdminUsersModalTableRadioTitle = styled.label`
  font-size: 12px;
`;
