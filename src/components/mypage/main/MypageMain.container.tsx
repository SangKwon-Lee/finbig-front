import { useQuery } from "@apollo/client";
import { Query, QueryUserArgs } from "../../../commons/types/generated/types";
import MypageMainPresenter from "./MypageMain.presenter";
import { GET_USER } from "./MypageMain.query";
import WithAuth from "../../common/hocs/withAuth";
import { blankImg } from "../../../utils/blankImg";
import { useEffect, useState } from "react";
const MypageMainContainer = () => {
  const userId = sessionStorage.getItem("userId");

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  const { data } = useQuery<Query, QueryUserArgs>(GET_USER, {
    variables: {
      id: String(userId),
    },
  });

  useEffect(() => {
    if (data?.user?.finbigDownload?.length) {
      setBlackLength(blankImg(data?.user?.finbigDownload.length));
    }
  }, [data]);

  return <MypageMainPresenter data={data?.user} blackLength={blackLength} />;
};

export default WithAuth(MypageMainContainer);
