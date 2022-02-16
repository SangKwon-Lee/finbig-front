import { ApolloError } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router";
import {
  LoginBottomContents,
  LoginBottomWrapper,
  LoginBtn,
  LoginInput,
  LoginInputWrapper,
  LoginTitle,
  LoginWrapper,
  Error,
} from "./Login.style";

interface ILoginProps {
  error: ApolloError | undefined;
  loading: boolean;
  handleLogin: () => Promise<void>;
  onEnterLogin: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChnageInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginPresenter: React.FC<ILoginProps> = ({
  error,
  loading,
  handleLogin,
  onEnterLogin,
  handleChnageInput,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <LoginWrapper>
        <LoginTitle>로그인</LoginTitle>
        <LoginInputWrapper>
          <LoginInput
            onChange={handleChnageInput}
            name="identifier"
            placeholder="아이디"
            onKeyPress={onEnterLogin}
          />
          <LoginInput
            type="password"
            onChange={handleChnageInput}
            name="password"
            placeholder="비밀번호"
            onKeyPress={onEnterLogin}
          />
          {error && <Error>아이디 또는 비밀번호가 잘못 되었습니다.</Error>}
          <LoginBtn onClick={handleLogin} disabled={loading}>
            로그인
          </LoginBtn>
          <LoginBottomWrapper>
            <LoginBottomContents
              onClick={() => {
                navigate(`/signup`);
              }}
            >
              회원가입
            </LoginBottomContents>
            <LoginBottomContents
              onClick={() => {
                navigate(`/findUser`);
              }}
            >
              아이디/비밀번호 찾기
            </LoginBottomContents>
          </LoginBottomWrapper>
        </LoginInputWrapper>
      </LoginWrapper>
    </>
  );
};

export default LoginPresenter;
