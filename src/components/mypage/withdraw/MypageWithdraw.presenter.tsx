import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import { MypageBody, MypageWithdrawWrapper } from "./MypageWithdraw.style";

const MypageWithdrawPresenter = () => {
  return (
    <MypageWithdrawWrapper>
      <MypageBody>
        <MypageLayoutContainer menu="withdraw" />
        결제내역
      </MypageBody>
    </MypageWithdrawWrapper>
  );
};

export default MypageWithdrawPresenter;
