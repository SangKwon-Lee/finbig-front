import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useTokensQuery } from "../../../commons/graphql/generated";

export default function WithAuth(Component: any) {
  return function HandleCheckLogin(props: any) {
    const navigate = useNavigate();
    const token = sessionStorage.getItem("accessToken");
    const tokenId = sessionStorage.getItem("token");

    //* 토큰
    const { data: user, loading } = useTokensQuery({
      variables: {
        where: {
          token: token,
          id: tokenId,
        },
      },
    });

    //* 토큰 체크
    const handleTokenCheck = async () => {
      if (!loading) {
        if (user === undefined) {
          alert("로그인이 필요합니다.");
          navigate("/login");
          return;
        }
      }
    };

    useEffect(() => {
      handleTokenCheck();
      return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, user]);
    return <Component {...props}></Component>;
  };
}
