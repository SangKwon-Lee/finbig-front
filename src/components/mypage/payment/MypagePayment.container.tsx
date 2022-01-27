import MypagePaymentPresenter from "./MypagePayment.presenter";
import WithAuth from "../../common/hocs/withAuth";
import { useQuery } from "@apollo/client";
import { FETCH_USER_PAYMENT } from "./MypagePayment.query";
import { QueryUserArgs, Query } from "../../../commons/types/generated/types";
const MypagePaymentContainer = () => {
  const userId = sessionStorage.getItem("userId");

  //* 결제 내역
  const { data } = useQuery<Query, QueryUserArgs>(FETCH_USER_PAYMENT, {
    variables: {
      id: String(userId),
    },
  });

  return <MypagePaymentPresenter paymentHistory={data?.user} />;
};

export default WithAuth(MypagePaymentContainer);
