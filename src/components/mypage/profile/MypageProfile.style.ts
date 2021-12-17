import styled from "@emotion/styled";

interface IMypageProfileProps {
  pwError?: boolean;
  passwordError?: string;
}

export const MypageProfileWrapper = styled.div`
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  padding-top: 58px;
  display: flex;
  justify-content: center;
  padding-bottom: 110px;
`;

export const MypageBody = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-between;
`;

//* 비밀번호 입력
export const MypageProfileContentsWrapper = styled.div`
  width: 821px;
  padding-top: 9px;
`;

export const MypageProfileTitle = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 16px;
  padding-bottom: 6px;
`;

export const MypageProfileContents = styled.div`
  font-size: 12px;
  color: #999999;
  padding-bottom: 2.5px;
`;

export const MypageLine = styled.div`
  width: 821px;
  border-top: 1px solid #c1c1c1;
`;

export const MypageProfileIDWrapper = styled.div`
  display: flex;
  margin-top: 33.5px;
  align-items: center;
`;

export const MypageProfileIDTitle = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 16px;
  width: 60px;
`;

export const MypageProfileID = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 16px;
  margin-left: 36px;
`;

export const MypageProfilePWInput = styled.input`
  width: 263px;
  height: 46px;
  border: ${(props: IMypageProfileProps) =>
    props.pwError ? "1px solid #ff0000" : "1px solid #cccccc"};
  outline: none;
  margin-left: 36px;
  padding-left: 13px;
  background-color: ${(props: IMypageProfileProps) =>
    props.pwError ? "#ffdcdc" : "white"};
`;

export const MyapgeBtnWrapper = styled.div`
  width: 821px;
  display: flex;
  justify-content: center;
  margin-top: 45.5px;
`;

export const MypageBtnCancel = styled.button`
  width: 263px;
  height: 46px;
  background-color: white;
  color: #999999;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  border: 1px solid #cccccc;
  margin-right: 16px;
`;

export const MypageBtnNext = styled.button`
  width: 263px;
  height: 46px;
  background-color: #4033a2;
  color: white;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  border: none;
`;

export const ErrorImg = styled.img`
  margin-left: 10px;
`;

export const ErrorMsg = styled.div`
  color: #ff0000;
  font-size: 11px;
  margin-left: 10px;
`;

//* 정보 수정

export const MypageProfileChangeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const MypageProfileChangeTitle = styled.div`
  font-size: 14px;
  width: 81px;
`;

export const MypageProfileChangeInput = styled.input`
  width: 319px;
  height: 36px;
  outline: none;
  padding-left: 13px;
  margin-left: 50px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  border: ${(props: IMypageProfileProps) =>
    props.passwordError ? "1px solid #ff0000" : "1px solid #cccccc"};
  background-color: ${(props: IMypageProfileProps) =>
    props.passwordError ? "#ffdcdc" : "white"};
`;

export const MypageProfileChangeContents = styled.div`
  font-size: 14px;
  margin-left: 50px;
`;

export const MypageProfileRadio = styled.input`
  margin-right: 4px;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid darkgray;
  border-radius: 50%;
  outline: none;
  background: white;
  margin-left: 50px;
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

export const MypageRadioTitle = styled.label`
  font-size: 12px;
`;

export const MypageChangeEmailBtn = styled.button`
  width: 116px;
  height: 36px;
  background-color: #4033a2;
  color: white;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 15px;
`;
