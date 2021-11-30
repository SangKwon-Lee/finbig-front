import styled from "@emotion/styled";

export const SignupWrapper = styled.div`
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 100px;
`;

export const SignupTitle = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
`;

export const SignupBodyWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
`;

export const SignupTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckImg = styled.img`
  margin-right: 13px;
`;

export const SignupSubTitle = styled.h2`
  font-size: 16px;
  font-family: SpoqaHanSansNeo-Bold;
`;

export const SignupContents = styled.div`
  font-size: 12px;
  margin-left: 36px;
  margin-top: 7px;
  color: #999999;
`;

export const Divider = styled.div`
  width: 1100px;
  border-top: 1px solid #cccccc;
  margin: 30px 0px 30px 0px;
`;

export const SignupBox = styled.div`
  width: 1100px;
  height: 192px;
  border: 1px solid #cccccc;
  padding: 12px 44px 12px 28px;
  margin: 14px 0px 30px 0px;
  overflow: auto;
  font-size: 12px;
  color: #999999;
  line-height: 20px;
`;

export const SignupBtnWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: center;
`;

export const SignupWhiteBtn = styled.button`
  width: 263px;
  height: 46px;
  background-color: white;
  cursor: pointer;
  outline: none;
  border: 1px solid #cccccc;
  margin-right: 16px;
`;

export const SignupBlueBtn = styled.button`
  width: 263px;
  height: 46px;
  background-color: #4033a2;
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
`;

export const SignupErrorMsg = styled.div`
  color: #ff0000;
  font-size: 11px;
  margin-bottom: 12px;
`;

export const SignupInputWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

export const SignupInputTitle = styled.div`
  width: 82px;
  font-size: 14px;
  margin-right: 50px;
`;

export const SignupInput = styled.input`
  width: 463px;
  height: 36px;
  border: 1px solid #cccccc;
  padding-left: 13px;
  outline: none;
  font-size: 14px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SignupErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  font-size: 14px;
  color: #ff0000;
`;

export const SignipErrorImg = styled.img`
  margin-right: 10px;
`;

export const SignupEmailBtn = styled.button`
  width: 128px;
  height: 36px;
  outline: none;
  color: white;
  background-color: #4033a2;
  font-size: 14px;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export const SignupRadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const SignupRadioTitle = styled.label`
  font-size: 12px;
`;

export const SignupRadio = styled.input`
  margin-right: 4px;
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

export const SignupSuccessMsg = styled.div`
  font-size: 14px;
  margin-left: 14px;
  color: #4033a2;
`;

export const SignupBigCheckWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignupSuccessTitle = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 24px;
  margin-top: 38px;
`;
export const SignupSuccessSubTitle = styled.div`
  font-size: 24px;
  margin-bottom: 71px;
`;
