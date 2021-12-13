import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import { MypageBody, MypageProfileWrapper } from "./MypageProfile.style";

const MypageProfilePresenter = () => {
  return (
    <MypageProfileWrapper>
      <MypageBody>
        <MypageLayoutContainer menu="profile" />
        결제내역
      </MypageBody>
    </MypageProfileWrapper>
  );
};

export default MypageProfilePresenter;
