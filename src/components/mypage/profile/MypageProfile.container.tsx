import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  QueryUserArgs,
  Query,
  MutationLoginArgs,
  Mutation,
  MutationUpdateUserArgs,
} from "../../../commons/types/generated/types";
import MypageProfilePresenter from "./MypageProfile.presenter";
import { GET_USER, LOGIN, UPDATE_USER } from "./MypageProfile.query";

const MypageProfileContainer = () => {
  const navigate = useNavigate();

  //* 다음 스탭
  const [step, setStep] = useState(0);

  //* 비밀번호 Input
  const [input, setInput] = useState({
    password: "",
  });

  //*모달 오픈
  const [isModal, setIsModal] = useState(false);

  //* 비밀번호 에러
  const [pwError, setPwError] = useState(false);

  //* 유저 정보 불러오기
  const { data: userData, refetch: userRefetch } = useQuery<
    Query,
    QueryUserArgs
  >(GET_USER, {
    variables: {
      id: String(sessionStorage.getItem("userId")),
    },
  });

  //* 로그인 뮤테이션
  const [login] = useMutation<Mutation, MutationLoginArgs>(LOGIN);

  //* 회원정보 변경 뮤테이션
  const [updateUser] = useMutation<Mutation, MutationUpdateUserArgs>(
    UPDATE_USER
  );

  //* 스탭 함수
  // const handleStep = () => {
  //   setStep(() => step + 1);
  // };

  //* 회원정보 변경을 위한 로그인
  const handleLogin = async () => {
    try {
      await login({
        variables: {
          input: {
            identifier: String(userData?.user?.username),
            password: input.password,
          },
        },
      });
      setPwError(false);
      setStep(() => step + 1);
    } catch (error) {
      setPwError(true);
      console.log(error);
    }
  };

  //*패스워드 입력
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //*회원정보 변경 함수

  const handleUpdateUser = async (data: any) => {
    try {
      const emailReception = data.emailReception === "true" ? true : false;
      const smsReception = data.smsReception === "true" ? true : false;
      await updateUser({
        variables: {
          input: {
            data: {
              email: data.email,
              password: data.password,
              phone: data.phone,
              smsReception,
              emailReception,
            },
            where: {
              id: String(userData?.user?.id),
            },
          },
        },
      });
      alert("회원정보가 변경됐습니다.");
      navigate("/mypage/main");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MypageProfilePresenter
      userData={userData}
      handleLogin={handleLogin}
      handlePasswordInput={handlePasswordInput}
      pwError={pwError}
      step={step}
      handleUpdateUser={handleUpdateUser}
      isModal={isModal}
      setIsModal={setIsModal}
      userRefetch={userRefetch}
    />
  );
};

export default MypageProfileContainer;
