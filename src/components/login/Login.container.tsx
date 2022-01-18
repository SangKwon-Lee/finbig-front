import { useMutation, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../App";
import {
  Mutation,
  MutationCreateTokenArgs,
  MutationLoginArgs,
  MutationUpdateTokenArgs,
  Query,
  QueryUserArgs,
} from "../../commons/types/generated/types";
import LoginPresenter from "./Login.presenter";
import {
  CREATE_TOKEN,
  FETCH_TOKEN,
  FETCH_USER,
  LOGIN,
  UPDATE_TOKEN,
} from "./Login.query";

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
  //* 기존 토큰 확인
  const [fetchToken] = useMutation(FETCH_TOKEN);

  //* 유저 정보 가져오기
  const { fetchMore } = useQuery<Query, QueryUserArgs>(FETCH_USER);

  //* 토근 정보 저장 뮤테이션
  const [createToken] = useMutation<Mutation, MutationCreateTokenArgs>(
    CREATE_TOKEN
  );

  //* 토큰 업데이트
  const [updateToken] = useMutation<Mutation, MutationUpdateTokenArgs>(
    UPDATE_TOKEN
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

      const { data: User } = await fetchMore({
        variables: {
          id: data?.login.user.id,
        },
      });
      if (User.user?.isDeleted) {
        alert("탈퇴된 회원입니다.");
        return;
      }
      sessionStorage.setItem("accessToken", String(data?.login.jwt));
      sessionStorage.setItem("userId", String(data?.login.user.id));
      setAccessToken(String(data?.login.jwt));
      setUserData(data?.login.user!);
      handleToken(data?.login);
    } catch (e) {
      return;
    }
  };

  //* 기존 토큰 있는지 체크
  const handleToken = async (data: any) => {
    try {
      const { data: tokenData } = await fetchToken({
        variables: {
          userId: String(data.user.id),
          token: String(data.jwt),
        },
      });
      sessionStorage.setItem("token", tokenData.fetchToken.id);
      handleUpdateToekn(data.jwt, tokenData.fetchToken.id);
    } catch (e) {
      handleCreateToekn(data.jwt, data.user.id);
    }
  };

  //* 토큰 DB 저장
  const handleCreateToekn = async (token: string, userId: string) => {
    try {
      const { data } = await createToken({
        variables: {
          input: {
            data: {
              userId,
              token,
            },
          },
        },
      });
      sessionStorage.setItem("token", String(data?.createToken?.token?.id));
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  //* 기존 DB에 토큰이 있다면 토큰 업데이트
  const handleUpdateToekn = async (token: string, id: string) => {
    try {
      await updateToken({
        variables: {
          input: {
            where: {
              id: String(id),
            },
            data: {
              token,
            },
          },
        },
      });
      navigate("/");
    } catch (e) {
      console.log(e);
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
