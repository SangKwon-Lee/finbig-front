import WithAuth from "../../common/hocs/withAuth";
import MypageRecentPresenter from "./MypageRecent.presenter";
import { useEffect, useState } from "react";
import { blankImg } from "../../../utils/blankImg";
import { useUserQuery } from "../../../commons/graphql/generated";
const MypageRecentContainer = () => {
  const userId = sessionStorage.getItem("userId");

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  //* 최근 본 데이터
  const { data, loading } = useUserQuery({
    variables: {
      id: String(userId),
    },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data?.user?.finbigView?.length) {
      setBlackLength(blankImg(data?.user?.finbigView.length));
    }
  }, [data]);

  return (
    <MypageRecentPresenter
      data={data}
      blackLength={blackLength}
      loading={loading}
    />
  );
};

export default WithAuth(MypageRecentContainer);
