import { useQuery } from "@apollo/client";
import { Query, QueryUserArgs } from "../../../commons/types/generated/types";
import MypageMainPresenter from "./MypageMain.presenter";
import { GET_USER } from "./MypageMain.query";
import WithAuth from "../../common/hocs/withAuth";
const MypageMainContainer = () => {
  const userId = sessionStorage.getItem("userId");
  const { data } = useQuery<Query, QueryUserArgs>(GET_USER, {
    variables: {
      id: String(userId),
    },
  });

  return <MypageMainPresenter data={data} userId={userId} />;
};

export default WithAuth(MypageMainContainer);
