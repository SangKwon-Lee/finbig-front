import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import { MypageBody, MypageDownloadWrapper } from "./MypageDownload.style";

const MypageDownloadPresenter = () => {
  return (
    <MypageDownloadWrapper>
      <MypageBody>
        <MypageLayoutContainer menu="download" />
        다운로드
      </MypageBody>
    </MypageDownloadWrapper>
  );
};

export default MypageDownloadPresenter;
