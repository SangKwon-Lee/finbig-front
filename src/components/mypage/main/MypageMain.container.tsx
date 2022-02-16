import MypageMainPresenter from "./MypageMain.presenter";
import WithAuth from "../../common/hocs/withAuth";
import { blankImg } from "../../../utils/blankImg";
import { useEffect, useState } from "react";
import { useUserQuery } from "../../../commons/graphql/generated";
const MypageMainContainer = () => {
  const userId = sessionStorage.getItem("userId");

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  //* 유저 정보
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

  return <MypageMainPresenter data={data} blackLength={blackLength} />;
};

export default WithAuth(MypageMainContainer);
