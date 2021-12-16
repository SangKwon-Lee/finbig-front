import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function WithAuth(Component: any) {
  return function HandleCheckLogin(props: any) {
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");

    //* 토큰 체크
    useEffect(() => {
      if (userId) return;

      const handleLoginPage = async () => {
        if (!userId) {
          alert("로그인이 필요합니다.");
          navigate("/login");
        }
      };

      handleLoginPage();
    }, [navigate, userId]);
    if (!userId) return <></>;
    return <Component {...props}></Component>;
  };
}
