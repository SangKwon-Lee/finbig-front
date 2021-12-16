import MypagePaymentPresenter from "./MypagePayment.presenter";
import WithAuth from "../../common/hocs/withAuth";
const MypagePaymentContainer = () => {
  return <MypagePaymentPresenter />;
};

export default WithAuth(MypagePaymentContainer);
