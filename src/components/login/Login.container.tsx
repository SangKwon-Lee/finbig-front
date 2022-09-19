import dayjs from "dayjs";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  useCreateTokenMutation,
  useLoginMutation,
  useTokensQuery,
  useUpdateTokenMutation,
  useUpdateUserMutation,
  useUserQuery,
} from "../../commons/graphql/generated";
import LoginPresenter from "./Login.presenter";
const LoginContainer = () => {
  const token = sessionStorage.getItem("accessToken");
  const tokenId = sessionStorage.getItem("token");

  //* 토큰
  const { data: tokenData } = useTokensQuery({
    variables: {
      where: {
        token: token,
        id: tokenId,
      },
    },
  });

  const navigate = useNavigate();

  //* 로그인 인풋
  const [input, setInput] = useState({
    identifier: "",
    password: "",
  });

  //* 로그인 뮤테이션
  const [login, { loading, error }] = useLoginMutation();

  //* 유저 정보 가져오기
  const { fetchMore } = useUserQuery({
    variables: {
      id: String(tokenData?.tokens![0]?.userId),
    },
  });

  //* 토근 정보 저장 뮤테이션
  const [createToken] = useCreateTokenMutation();

  //* 토큰 업데이트
  const [updateToken] = useUpdateTokenMutation();

  //* 유저의 구독 만료일 업데이트
  const [updateIsSubscription] = useUpdateUserMutation();

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
        alert(
          "아이디 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요."
        );
        return;
      }
      if (User.user?.isSubscribe) {
        if (dayjs(new Date()) > dayjs(User?.user?.expirationDate)) {
          handleIsSubscriptionUser(User?.user?.id);
        }
      }
      sessionStorage.setItem("accessToken", String(data?.login.jwt));
      let tokenId = sessionStorage.getItem("token");

      if (tokenId) {
        handleUpdateToekn(String(data?.login.jwt), String(tokenId));
      } else {
        handleCreateToekn(String(data?.login.jwt), String(User?.user?.id));
      }
    } catch (e) {
      alert(
        "아이디 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요."
      );
      return;
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
    } catch (e) {}
  };

  //* 기존 DB에 토큰이 있다면 토큰 업데이트
  const handleUpdateToekn = async (token: string, id: string) => {
    try {
      const { data } = await updateToken({
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
      sessionStorage.setItem(
        "accessToken",
        String(data?.updateToken?.token?.token)
      );
      navigate("/");
    } catch (e) {}
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

  //* 유저의 구독 만료일 업데이트
  const handleIsSubscriptionUser = async (id: any) => {
    try {
      await updateIsSubscription({
        variables: {
          input: {
            data: {
              isSubscribe: false,
              expirationDate: null,
            },
            where: {
              id,
            },
          },
        },
      });
    } catch (e) {}
  };

  return (
    <LoginPresenter
      error={error}
      loading={loading}
      handleLogin={handleLogin}
      onEnterLogin={onEnterLogin}
      handleChnageInput={handleChnageInput}
    />
  );
};

export default LoginContainer;
