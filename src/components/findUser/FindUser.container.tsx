import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  EmailAuth,
  Mutation,
  MutationCreateEmailAuthArgs,
  MutationDeleteEmailAuthArgs,
  MutationUpdateUserArgs,
} from "../../commons/types/generated/types";
import FindUserPresenter from "./FindUser.presenter";
import {
  DELETE_EMAIL_AUTH,
  EMAIL_AUTH,
  EMAIL_AUTH_CHECK,
  FETCH_USERS,
  UPDATE_USER,
} from "./FindUser.query";
import { useNavigate } from "react-router";
const FindUserContainer = () => {
  const navigate = useNavigate();

  //* css 변경
  const [isActive, setIsActive] = useState({
    id: true,
    pass: false,
  });

  //* 찾기 결과
  const [isFind, setIsFind] = useState("findId");

  //* 찾은 아이디
  const [resultId, setResultId] = useState({
    id: "",
    email: "",
    username: "",
    createdAt: "",
  });

  //* 인증 상태
  const [isAuth, setIsAuth] = useState({
    isSend: false,
    isOk: false,
    isError: false,
  });

  //* 에러
  const [errorMsg, setErrorMsg] = useState({
    authError: false,
    findError: false,
  });

  //* 아이디 찾기 쿼리
  const { fetchMore } = useQuery(FETCH_USERS, {
    variables: {
      where: {
        name: "",
        email: "",
      },
    },
  });

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

  //* 비밀번호 업데이트
  const [updateUser] = useMutation<Mutation, MutationUpdateUserArgs>(
    UPDATE_USER
  );

  //* 아이디, 비밀번호 찾기 클릭
  const handleIsActive = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "id") {
      setIsActive({
        ...isActive,
        id: true,
        pass: false,
      });
      setIsFind("findId");
    } else {
      setIsActive({
        ...isActive,
        id: false,
        pass: true,
      });
      setIsFind("findPass");
    }
  };

  //* 아이디 찾기 함수
  const handleFindId = async (input: any) => {
    try {
      const { data }: any = await fetchMore({
        variables: {
          where: {
            name: input.name,
            email: input.email,
          },
        },
      });
      let username = data?.users[0].username;
      username =
        username.slice(0, 2) +
        "*".repeat(username.length - 3) +
        username.slice(username.length - 1, username.length);
      setIsFind("id");
      setResultId({
        ...resultId,
        username: username,
        createdAt: data?.users[0].created_at,
      });
    } catch (error) {
      setIsFind("id");
    }
  };

  //* 비밀번호 찾기 함수
  const handleFindPass = async (input: any) => {
    if (isAuth.isOk) {
      try {
        const { data }: any = await fetchMore({
          variables: {
            where: {
              name: input.passName,
              email: input.passEmail,
            },
          },
        });
        setResultId({
          ...resultId,
          id: data?.users[0].id,
          email: data?.users[0].email,
          username: data?.users[0].username,
        });
      } catch (error) {
      } finally {
        setIsFind("pass");
      }
    } else {
      alert("인증을 완료해야 합니다.");
    }
  };

  //* 인증번호 발송
  const handleEmailAuth = async (email: string) => {
    const { data }: any = await fetchMore({
      variables: {
        where: {
          email: email,
        },
      },
    });
    if (data.users.length === 0) {
      setErrorMsg({
        ...errorMsg,
        findError: true,
      });
    } else {
      try {
        await emailAuth({
          variables: {
            input: {
              data: {
                email: email,
                code: "",
                type: "find",
              },
            },
          },
        });
        alert("인증코드가 메일로 전송됐습니다.");
        refetch();
        setIsAuth({
          ...isAuth,
          isSend: true,
        });
        setErrorMsg({
          ...errorMsg,
          findError: false,
        });
      } catch (error) {
        alert(error);
      }
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
        alert("인증이 완료 됐습니다.");
        setErrorMsg({
          ...errorMsg,
          authError: false,
        });
      } catch (error) {
        setIsAuth({
          ...isAuth,
          isError: true,
        });
      }
    } else {
      setErrorMsg({
        ...errorMsg,
        authError: true,
      });
      setIsAuth({
        ...isAuth,
        isError: true,
      });
    }
  };
  //* 비밀번호 변경
  const handleResetPass = async (input: any) => {
    try {
      await updateUser({
        variables: {
          input: {
            where: {
              id: resultId.id,
            },
            data: {
              password: input.password,
            },
          },
        },
      });
      alert("비밀번호가 변경됐습니다.");
      navigate("/login");
    } catch (error) {
      alert("서버 에러가 발생했습니다.");
    }
  };

  return (
    <FindUserPresenter
      isActive={isActive}
      handleIsActive={handleIsActive}
      handleFindId={handleFindId}
      isFind={isFind}
      resultId={resultId}
      handleEmailAuth={handleEmailAuth}
      isAuth={isAuth}
      handleEmailAuthCheck={handleEmailAuthCheck}
      handleFindPass={handleFindPass}
      handleResetPass={handleResetPass}
      errorMsg={errorMsg}
    />
  );
};

export default FindUserContainer;
