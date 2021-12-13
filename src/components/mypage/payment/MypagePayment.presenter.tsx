import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import { MypageBody, MypagePaymentWrapper } from "./MypagePayment.style";

const MypagePaymentPresenter = () => {
  return (
    <MypagePaymentWrapper>
      <MypageBody>
        <MypageLayoutContainer menu="payment" />
        결제내역
      </MypageBody>
    </MypagePaymentWrapper>
  );
};

export default MypagePaymentPresenter;
