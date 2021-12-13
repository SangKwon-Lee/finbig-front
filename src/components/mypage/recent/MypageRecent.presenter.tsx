import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import { MypageBody, MypageRecentWrapper } from "./MypageRecent.style";

const MypageRecentPresenter = () => {
  return (
    <MypageRecentWrapper>
      <MypageBody>
        <MypageLayoutContainer menu="recent" />
        결제내역
      </MypageBody>
    </MypageRecentWrapper>
  );
};

export default MypageRecentPresenter;
