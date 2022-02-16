import { useEffect, useState } from "react";
import { blankImg } from "../../../utils/blankImg";
import WithAuth from "../../common/hocs/withAuth";
import MypageDownloadPresenter from "./MypageDownload.presenter";
import { useUserQuery } from "../../../commons/graphql/generated";

const MypageDownloadContainer = () => {
  const userId = sessionStorage.getItem("userId");

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  //*다운로드 내역
  const { data } = useUserQuery({
    variables: {
      id: String(userId),
    },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data?.user?.finbigDownload?.length) {
      setBlackLength(blankImg(data?.user?.finbigDownload.length));
    }
  }, [data]);

  return <MypageDownloadPresenter data={data} blackLength={blackLength} />;
};

export default WithAuth(MypageDownloadContainer);
