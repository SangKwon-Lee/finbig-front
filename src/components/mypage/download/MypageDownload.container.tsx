import WithAuth from "../../common/hocs/withAuth";
import MypageDownloadPresenter from "./MypageDownload.presenter";

const MypageDownloadContainer = () => {
  return <MypageDownloadPresenter />;
};

export default WithAuth(MypageDownloadContainer);
