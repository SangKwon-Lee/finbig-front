import { useEffect, useState } from "react";
import { Query, QueryUserArgs } from "../../../commons/types/generated/types";
import { blankImg } from "../../../utils/blankImg";
import WithAuth from "../../common/hocs/withAuth";
import MypageDownloadPresenter from "./MypageDownload.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USER_DOWNLOAD } from "./MypageDownload.query";

const MypageDownloadContainer = () => {
  const userId = sessionStorage.getItem("userId");

  //* 빈 이미지
  const [blackLength, setBlackLength] = useState<number>(1);

  const { data } = useQuery<Query, QueryUserArgs>(FETCH_USER_DOWNLOAD, {
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

  return (
    <MypageDownloadPresenter data={data?.user} blackLength={blackLength} />
  );
};

export default WithAuth(MypageDownloadContainer);
