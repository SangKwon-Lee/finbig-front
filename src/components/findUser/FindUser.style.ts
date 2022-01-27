import styled from "@emotion/styled";

interface IFindUserProps {
  isActive: {
    id: boolean;
    pass: boolean;
  };
}

//* 아이디 찾기
export const FindUserWrapper = styled.div`
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 161px;
  padding-bottom: 153px;
`;

export const FindUserTitleWrapper = styled.div`
  width: 356px;
  display: flex;
  justify-content: center;
  margin-bottom: 34px;
`;

export const FindUserTitleId = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 20px;
  color: ${(props: IFindUserProps) =>
    props.isActive.id ? "black" : "#cccccc"};
  cursor: pointer;
`;
export const FindUserTitlePass = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 20px;
  color: ${(props: IFindUserProps) =>
    props.isActive.pass ? "black" : "#cccccc"};
  cursor: pointer;
`;

export const FindUserInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FindUserInput = styled.input`
  width: 356px;
  height: 46px;
  border: 1px solid #cccccc;
  padding-left: 20px;
  outline: none;
  margin-bottom: 12px;
  ::placeholder {
    color: #cccccc;
  }
`;

export const FindUserError = styled.div`
  color: #ff0000;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 364px;
  margin-bottom: 10px;
`;

export const FindUserBtn = styled.button`
  width: 356px;
  height: 46px;
  background-color: #4033a2;
  color: white;
  font-size: 14px;
  margin-top: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const FindUserErrorSVG = styled.img`
  margin-right: 10px;
`;

//* 아이디 찾기 결과

export const FindIdTitle = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const FindIdBox = styled.div`
  width: 542px;
  height: 90px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
`;

export const FindIdResultTitle = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
`;

export const FindIdResultSubTitle = styled.div`
  color: #999999;
  font-size: 14px;
`;

export const FindId = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  margin-bottom: 8px;
`;

export const FindIdDate = styled.div`
  font-size: 14px;
`;

export const FindIdBtnWrapper = styled.div`
  display: flex;
  width: 542px;
  justify-content: space-between;
  margin-top: 32px;
`;

export const FindIdLeftBtn = styled.button`
  width: 263px;
  height: 46px;
  border: 1px solid #cccccc;
  outline: none;
  cursor: pointer;
  background-color: white;
  color: #cccccc;
`;

export const FindIdRigthBtn = styled.button`
  width: 263px;
  height: 46px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #4033a2;
  color: white;
`;

//* 비밀번호 찾기

export const FindPassInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FindPassInput = styled.input`
  width: 356px;
  height: 46px;
  border: 1px solid #cccccc;
  padding-left: 20px;
  outline: none;
  margin-bottom: 12px;
  ::placeholder {
    color: #cccccc;
  }
`;

export const FindPassEamilAuthWrapper = styled.div`
  display: flex;
`;

export const FindPassEmailInput = styled.input`
  width: 238px;
  height: 46px;
  border: 1px solid #cccccc;
  padding-left: 20px;
  outline: none;
  margin-bottom: 12px;
  ::placeholder {
    color: #cccccc;
  }
`;

export const FindPassEmailAuthBtn = styled.button`
  width: 118px;
  height: 46px;
  outline: none;
  border: none;
  background-color: #4033a2;
  color: white;
  cursor: pointer;
`;

export const FindPassBtn = styled.button`
  width: 356px;
  height: 46px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #4033a2;
  color: white;
  margin-top: 17px;
`;

//* 비밀번호 재설정

export const FindPassReset = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FindPassResetInput = styled.input`
  width: 402px;
  height: 36px;
  border: 1px solid #cccccc;
  outline: none;
  padding-left: 20px;
`;

export const FindPassResetInputTitle = styled.div`
  font-size: 14px;
`;

export const FindPassResetWrapper = styled.div`
  display: flex;
  width: 542px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const FindPassResetBtn = styled.button`
  width: 263px;
  height: 46px;
  background-color: #4033a2;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 8px;
`;

export const FindPassError = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
