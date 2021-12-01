import { useMutation } from "@apollo/client";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../App";
import {
  Mutation,
  MutationLoginArgs,
} from "../../commons/types/generated/types";
import LoginPresenter from "./Login.presenter";
import { LOGIN } from "./Login.query";

const LoginContainer = () => {
  //* 토큰 전역 함수
  const { setAccessToken, setUserData } = useContext(GlobalContext);

  const navigate = useNavigate();

  //* 로그인 인풋
  const [input, setInput] = useState({
    identifier: "",
    password: "",
  });

  //* 로그인 뮤테이션
  const [login, { loading, error }] = useMutation<Mutation, MutationLoginArgs>(
    LOGIN
  );

  //* 로그인 함수
  const handleLogin = async () => {
    try {
      const { data } = await login({
        variables: {
          input: {
            identifier: input.identifier,
            password: input.password,
          },
        },
      });
      localStorage.setItem("accessToken", String(data?.login.jwt));
      setAccessToken(String(data?.login.jwt));
      setUserData(data?.login.user!);
      navigate("/");
    } catch (e) {
      return;
    }
  };

  //* 인풋 바꾸기
  const handleChnageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  //* 엔터 키 누를 시 로그인 실행
  const onEnterLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <LoginPresenter
      handleLogin={handleLogin}
      loading={loading}
      handleChnageInput={handleChnageInput}
      onEnterLogin={onEnterLogin}
      error={error}
    />
  );
};

export default LoginContainer;
