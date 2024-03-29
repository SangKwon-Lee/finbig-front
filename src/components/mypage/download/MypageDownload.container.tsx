import { useEffect, useState } from "react";
import { blankImg } from "../../../utils/blankImg";
import WithAuth from "../../common/hocs/withAuth";
import MypageDownloadPresenter from "./MypageDownload.presenter";
import {
  useTokensQuery,
  useUserQuery,
} from "../../../commons/graphql/generated";

const MypageDownloadContainer = () => {
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

  //*다운로드 내역
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
  }, [data]);

  return <MypageDownloadPresenter data={data} blackLength={blackLength} />;
};

export default WithAuth(MypageDownloadContainer);
