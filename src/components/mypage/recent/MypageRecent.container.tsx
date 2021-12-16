import WithAuth from "../../common/hocs/withAuth";
import MypageRecentPresenter from "./MypageRecent.presenter";
const MypageRecentContainer = () => {
  return <MypageRecentPresenter />;
};

export default WithAuth(MypageRecentContainer);
