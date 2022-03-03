import MypageMainPresenter from "./MypageMain.presenter";
import WithAuth from "../../common/hocs/withAuth";
import { blankImg } from "../../../utils/blankImg";
import { useEffect, useState } from "react";
import {
  useTokensQuery,
  useUserQuery,
} from "../../../commons/graphql/generated";

const MypageMainContainer = () => {
  const token = sessionStorage.getItem("accessToken");
  const tokenId = sessionStorage.getItem("token");

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
    if (data?.user?.finbigDownload?.length) {
      setBlackLength(blankImg(data?.user?.finbigDownload.length));
    }
  }, [data]);

  return <MypageMainPresenter data={data} blackLength={blackLength} />;
};

export default WithAuth(MypageMainContainer);
