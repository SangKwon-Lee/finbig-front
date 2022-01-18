import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { FETCH_TOKEN } from "../../login/Login.query";

export default function WithAuth(Component: any) {
  return function HandleCheckLogin(props: any) {
    const [fetchToken] = useMutation(FETCH_TOKEN);
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("accessToken");

    //* 토큰 체크
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleTokenCheck = async () => {
      try {
        await fetchToken({
          variables: {
            userId,
            token,
          },
        });
      } catch {
        alert("로그인이 필요합니다.");
        navigate("/login");
        return false;
      }
    };

    useEffect(() => {
      handleTokenCheck();
      return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <Component {...props}></Component>;
  };
}
