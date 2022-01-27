import { useQuery } from "@apollo/client";
import { Query, QueryUserArgs } from "../../../commons/types/generated/types";
import WithAuth from "../../common/hocs/withAuth";
import { FETCH_USER_VIEWDATA } from "./MypageRecent.query";
import MypageRecentPresenter from "./MypageRecent.presenter";
import { useEffect, useState } from "react";
import { blankImg } from "../../../utils/blankImg";
const MypageRecentContainer = () => {
  const userId = sessionStorage.getItem("userId");

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  //* 최근 본 데이터
  const { data } = useQuery<Query, QueryUserArgs>(FETCH_USER_VIEWDATA, {
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

  return <MypageRecentPresenter data={data?.user} blackLength={blackLength} />;
};

export default WithAuth(MypageRecentContainer);
