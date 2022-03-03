import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../../commons/graphql/generated";
import AdminLoginPresneter from "./AdminLogin.presenter";

const AdminLoginContainer = () => {
  const navigate = useNavigate();

  //* 로그인 Input 관리
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
    error: false,
  });

  //* 관리자 로그인
  const [adminLogin] = useLoginMutation();

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
      sessionStorage.setItem("accessToken", String(data?.login.jwt));
      navigate("/admin/users");
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
