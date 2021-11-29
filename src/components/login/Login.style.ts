import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 161px;
  padding-bottom: 197px;
`;

export const LoginTitle = styled.div`
  font-size: 20px;
`;

export const LoginInputWrapper = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 34px;
`;

export const LoginInput = styled.input`
  width: 365px;
  height: 46px;
  margin-bottom: 12px;
  padding-left: 20px;
  ::placeholder {
    font-size: 12px;
    color: #cccccc;
  }
  border: 1px solid #cccccc;
  outline: none;
`;

export const LoginBtn = styled.button`
  width: 365px;
  height: 46px;
  text-align: center;
  font-size: 14px;
  color: white;
  background-color: #4033a2;
  cursor: pointer;
  outline: none;
  border: none;
  margin-bottom: 12px;
`;

export const LoginBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 174px;
  align-self: flex-end;
`;

export const LoginBottomContents = styled.div`
  font-size: 12px;
  color: #999999;
  cursor: pointer;
`;

export const Error = styled.div`
  color: #ff003e;
  font-size: 11px;
  margin-bottom: 12px;
`;
