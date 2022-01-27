import styled from "@emotion/styled";

export const AdminLoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262246;
  flex-direction: column;
`;

export const AdminLogo = styled.img`
  margin-bottom: 60px;
`;

export const AdminInput = styled.input`
  width: 400px;
  height: 60px;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: white;
  padding: 20px 40px;
  margin-bottom: 18px;
  ::placeholder {
    color: #cccccc;
  }
`;

export const AdminLoginBtn = styled.button`
  width: 400px;
  height: 60px;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: #b000f9;
  color: white;
  font-family: SpoqaHanSans-Bold;
  margin-top: 22px;
  cursor: pointer;
`;

export const AdminLoginError = styled.div`
  color: #ff003e;
  font-size: 11px;
`;
