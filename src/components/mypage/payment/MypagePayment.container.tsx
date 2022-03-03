import MypagePaymentPresenter from "./MypagePayment.presenter";
import WithAuth from "../../common/hocs/withAuth";
import {
  useTokensQuery,
  useUserQuery,
} from "../../../commons/graphql/generated";

const MypagePaymentContainer = () => {
  const token = sessionStorage.getItem("accessToken");
  const tokenId = sessionStorage.getItem("token");

  //* 토큰
  const { data: user } = useTokensQuery({
    variables: {
      where: {
        token: token,
        id: tokenId,
      },
    },
  });

  //* 결제 내역
  const { data } = useUserQuery({
    variables: {
      id: String(user?.tokens![0]?.userId),
    },
    fetchPolicy: "no-cache",
  });

  return <MypagePaymentPresenter paymentHistory={data} />;
};

export default WithAuth(MypagePaymentContainer);
