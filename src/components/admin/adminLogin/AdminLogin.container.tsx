import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Mutation } from "../../../commons/types/generated/types";
import AdminLoginPresneter from "./AdminLogin.presenter";
import { FETCH_ADMINISTRATOR } from "./AdminLogin.query";

const AdminLoginContainer = () => {
  const [fetchAdministrator] = useMutation<Mutation>(FETCH_ADMINISTRATOR);
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
    error: false,
  });

  const handleAdminLogin = async () => {
    try {
      await fetchAdministrator({
        variables: {
          username: loginInput.username,
          password: loginInput.password,
        },
      });
      setLoginInput({
        ...loginInput,
        error: false,
      });
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
