import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { FETCH_USER } from "../../admin/adminLogin/AdminLogin.query";

export default function WithAdminAuth(Component: any) {
  return function HandleCheckLogin(props: any) {
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");
    const { data, loading } = useQuery(FETCH_USER, {
      variables: {
        id: userId,
      },
    });

    useEffect(() => {
      if (!loading) {
        if (!data?.user.isAdmin) {
          alert("관리자만 이용 가능합니다.");
          navigate("/");
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return <Component {...props}></Component>;
  };
}
