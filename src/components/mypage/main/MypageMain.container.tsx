import { useQuery } from "@apollo/client";
import { Query, QueryUserArgs } from "../../../commons/types/generated/types";
import MypageMainPresenter from "./MypageMain.presenter";
import { GET_USER } from "./MypageMain.query";
const MypageMainContainer = () => {
  const { data } = useQuery<Query, QueryUserArgs>(GET_USER, {
    variables: {
      id: String(sessionStorage.getItem("userId")),
    },
  });
  return <MypageMainPresenter data={data} />;
};

export default MypageMainContainer;
