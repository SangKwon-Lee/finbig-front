import { useState } from "react";
import { useNavigate } from "react-router";
import {
  useCreateTokenMutation,
  useLoginMutation,
  useTokensQuery,
  useUserQuery,
} from "../../../commons/graphql/generated";
import AdminLoginPresneter from "./AdminLogin.presenter";

const AdminLoginContainer = () => {
  const navigate = useNavigate();
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

  //* 로그인 Input 관리
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
    error: false,
  });

  //* 관리자 로그인
  const [adminLogin] = useLoginMutation();

  //* 유저 정보 가져오기
  const { fetchMore } = useUserQuery({
    variables: {
      id: String(tokenData?.tokens![0]?.userId),
    },
  });
  //* 토근 정보 저장 뮤테이션
  const [createToken] = useCreateTokenMutation();

  //* 관리자 로그인 함수
  const handleAdminLogin = async () => {
    try {
      const { data } = await adminLogin({
        variables: {
          input: {
            identifier: loginInput.username,
            password: loginInput.password,
          },
        },
      });
      setLoginInput({
        ...loginInput,
        error: false,
      });
      const { data: User } = await fetchMore({
        variables: {
          id: data?.login.user.id,
        },
      });

      if (User.user?.isAdmin) {
        sessionStorage.setItem("accessToken", String(data?.login.jwt));
        handleCreateToekn(String(data?.login.jwt), String(User?.user?.id));
        navigate("/admin/users");
      } else {
        alert("관리자만 이용 가능합니다.");
        sessionStorage.clear();
        navigate("/");
      }
    } catch (e) {
      setLoginInput({
        ...loginInput,
        error: true,
      });
    }
  };

  //* 로그인 Input
  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  //* 엔터 키 누를 시 로그인 실행
  const onEnterLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdminLogin();
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
      // navigate("/");
    } catch (e) {}
  };

  return (
    <AdminLoginPresneter
      handleLoginInput={handleLoginInput}
      handleAdminLogin={handleAdminLogin}
      loginInput={loginInput}
      onEnterLogin={onEnterLogin}
    />
  );
};

export default AdminLoginContainer;
