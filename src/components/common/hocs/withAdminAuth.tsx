import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  useTokensQuery,
  useUserQuery,
} from "../../../commons/graphql/generated";
export default function WithAdminAuth(Component: any) {
  return function HandleCheckLogin(props: any) {
    const navigate = useNavigate();
    const token = sessionStorage.getItem("accessToken");
    const tokenId = sessionStorage.getItem("token");

    //* 토큰
    const { data: tokenData, loading } = useTokensQuery({
      variables: {
        where: {
          token: token,
          id: tokenId,
        },
      },
    });

    const { fetchMore } = useUserQuery({
      variables: {
        id: String(tokenData?.tokens![0]?.userId),
      },
    });

    const adminLogin = async () => {
      try {
        const { data } = await fetchMore({
          variables: {
            id: String(tokenData?.tokens![0]?.userId),
          },
        });
        if (!data?.user?.isAdmin) {
          alert("관리자만 이용 가능합니다.");
          sessionStorage.clear();
          navigate("/");
        }
      } catch (e) {}
    };

    useEffect(() => {
      if (tokenData?.tokens![0]?.userId) {
        adminLogin();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return <Component {...props}></Component>;
  };
}
