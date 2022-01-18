import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Mutation,
  MutationLoginArgs,
} from "../../../commons/types/generated/types";
import { LOGIN } from "../../login/Login.query";
import AdminLoginPresneter from "./AdminLogin.presenter";

const AdminLoginContainer = () => {
  const navigate = useNavigate();
  const [adminLogin] = useMutation<Mutation, MutationLoginArgs>(LOGIN);
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
    error: false,
  });

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
      sessionStorage.setItem("userId", String(data?.login.user.id));
      navigate("/admin/users");
    } catch (e) {
      setLoginInput({
        ...loginInput,
        error: true,
      });
    }
  };

  const handleLoginInput = (e: any) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AdminLoginPresneter
      handleLoginInput={handleLoginInput}
      handleAdminLogin={handleAdminLogin}
      loginInput={loginInput}
    />
  );
};

export default AdminLoginContainer;
