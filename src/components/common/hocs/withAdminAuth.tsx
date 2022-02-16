import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserQuery } from "../../../commons/graphql/generated";

export default function WithAdminAuth(Component: any) {
  return function HandleCheckLogin(props: any) {
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");
    const { data, loading } = useUserQuery({
      variables: {
        id: String(userId),
      },
    });

    useEffect(() => {
      if (!loading) {
        if (!data!.user!.isAdmin) {
          alert("관리자만 이용 가능합니다.");
          sessionStorage.clear();
          navigate("/");
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return <Component {...props}></Component>;
  };
}
