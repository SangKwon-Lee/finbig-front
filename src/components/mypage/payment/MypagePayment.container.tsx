import MypagePaymentPresenter from "./MypagePayment.presenter";
import WithAuth from "../../common/hocs/withAuth";
import { useUserQuery } from "../../../commons/graphql/generated";
const MypagePaymentContainer = () => {
  const userId = sessionStorage.getItem("userId");

  //* 결제 내역
  const { data } = useUserQuery({
    variables: {
      id: String(userId),
    },
    fetchPolicy: "no-cache",
  });

  return <MypagePaymentPresenter paymentHistory={data} />;
};

export default WithAuth(MypagePaymentContainer);
