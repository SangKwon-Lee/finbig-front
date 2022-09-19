import MypageMainPresenter from "./MypageMain.presenter";
import WithAuth from "../../common/hocs/withAuth";
import { blankImg } from "../../../utils/blankImg";
import { useEffect, useState } from "react";
import {
  useTokensQuery,
  useUserQuery,
} from "../../../commons/graphql/generated";
import { useNavigate } from "react-router";

const MypageMainContainer = () => {
  const token = sessionStorage.getItem("accessToken");
  const tokenId = sessionStorage.getItem("token");
  const router = useNavigate();

  //* 토큰
  const { data: user } = useTokensQuery({
    variables: {
      where: {
        token: token,
        id: tokenId,
      },
    },
  });

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  //* 유저 정보
  const { data } = useUserQuery({
    variables: {
      id: String(user?.tokens![0]?.userId),
    },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data?.user?.finbig_downloads?.length) {
      setBlackLength(blankImg(data?.user?.finbig_downloads.length));
    }
    if (user?.tokens?.length === 0) {
      router("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, user]);

  return <MypageMainPresenter data={data} blackLength={blackLength} />;
};

export default WithAuth(MypageMainContainer);
