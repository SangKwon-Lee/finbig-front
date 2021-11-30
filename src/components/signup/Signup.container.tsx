import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  EmailAuth,
  Mutation,
  MutationCreateEmailAuthArgs,
  MutationCreateUserArgs,
  MutationDeleteEmailAuthArgs,
} from "../../commons/types/generated/types";
import SignupPresenter from "./Signup.presenter";
import {
  CREATE_USER,
  DELETE_EMAIL_AUTH,
  EMAIL_AUTH,
  EMAIL_AUTH_CHECK,
  FETCH_USERS,
} from "./Signup.query";

const SignupContainer = () => {
  //* 이용약관 동의 스테이트
  const [checkInput, setCheckInput] = useState({
    first: false,
    second: false,
  });
  //* 동의하지 않을 때 에러
  const [errorMsg, setErrorMsg] = useState(false);

  //* 회원가입 절차
  const [step, setStep] = useState(0);

  //* 인증 상태
  const [isAuth, setIsAuth] = useState({
    isSend: false,
    isOk: false,
    isError: false,
  });

  //* 중복이름 확인
  const [isCheckName, setIsCheckName] = useState(false);

  //* 유저 생성 Mutation
  const [createUser] = useMutation<Mutation, MutationCreateUserArgs>(
    CREATE_USER
  );

  //* 이메일 인증 Mutation
  const [emailAuth] = useMutation<Mutation, MutationCreateEmailAuthArgs>(
    EMAIL_AUTH
  );

  //* 이메일 인증 후 데이터 삭제
  const [deleteEmailAuth] = useMutation<Mutation, MutationDeleteEmailAuthArgs>(
    DELETE_EMAIL_AUTH
  );

  //* 이메일 인증 코드 데이터
  const { data, refetch } = useQuery(EMAIL_AUTH_CHECK);

  //* 중복 이름 확인 쿼리
  const { fetchMore } = useQuery(FETCH_USERS, {
    variables: {
      where: {
        username: "",
      },
    },
  });

  //* 모든 약관 동의 함수
  const handleAllCheck = () => {
    if (checkInput.first && checkInput.second) {
      setCheckInput({
        ...checkInput,
        first: false,
        second: false,
      });
      return;
    }
    setCheckInput({
      ...checkInput,
      first: true,
      second: true,
    });
  };

  //* 다음 스탭으로 넘어가는 함수
  const handleNextBtn = () => {
    if (checkInput.first && checkInput.second) {
      setErrorMsg(false);
      setStep(() => step + 1);
    } else {
      setErrorMsg(true);
    }
  };

  //* 유저 생성 함수
  const handleCreateUser = async (data: any) => {
    if (isAuth.isOk) {
      try {
        const emailReception = data.emailReception === "true" ? true : false;
        const smsReception = data.smsReception === "true" ? true : false;
        await createUser({
          variables: {
            input: {
              data: {
                email: data.email,
                username: data.username,
                password: data.password,
                emailReception,
                smsReception,
                name: data.name,
              },
            },
          },
        });
        setStep(() => step + 1);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("내용 입력 및 인증번호를 확인해주세요.");
    }
  };

  //* 인증번호 발송
  const handleEmailAuth = async (email: string) => {
    try {
      await emailAuth({
        variables: {
          input: {
            data: {
              email: email,
              code: "",
            },
          },
        },
      });
      alert("인증코드가 메일로 전송됐습니다.");
      setIsAuth({
        ...isAuth,
        isSend: true,
      });
      refetch();
    } catch (error) {
      alert("이미 가입된 이메일입니다.");
    }
  };

  //* 인증번호 확인
  const handleEmailAuthCheck = async (auth: string) => {
    let Auth: EmailAuth[] = data?.emailAuths.filter(
      (data: any) => data.code === auth
    );
    if (Auth.length === 1) {
      try {
        setIsAuth({
          ...isAuth,
          isOk: true,
          isError: false,
        });
        await deleteEmailAuth({
          variables: {
            input: {
              where: {
                id: Auth[0].id,
              },
            },
          },
        });
      } catch (error) {
        console.log(error);
        setIsAuth({
          ...isAuth,
          isError: true,
        });
      }
    } else {
      setIsAuth({
        ...isAuth,
        isError: true,
      });
    }
  };

  //* 유저 중복이름 확인
  const checkUsername = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkUser = await fetchMore({
      variables: {
        where: {
          username: e.target.value,
        },
      },
    });
    if (checkUser?.data?.users.length === 1) {
      setIsCheckName(true);
    } else {
      setIsCheckName(false);
    }
  };

  return (
    <SignupPresenter
      checkInput={checkInput}
      setCheckInput={setCheckInput}
      handleAllCheck={handleAllCheck}
      handleNextBtn={handleNextBtn}
      errorMsg={errorMsg}
      step={step}
      handleCreateUser={handleCreateUser}
      handleEmailAuth={handleEmailAuth}
      isAuth={isAuth}
      handleEmailAuthCheck={handleEmailAuthCheck}
      checkUsername={checkUsername}
      isCheckName={isCheckName}
    />
  );
};

export default SignupContainer;
