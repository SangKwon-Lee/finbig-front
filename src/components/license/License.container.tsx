import { Helmet, HelmetProvider } from "react-helmet-async";
import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router";
import LicensePresenter from "./License.presenter";
import dayjs from "dayjs";
import {
  useCreateSubscriptionHistoryMutation,
  useTokensQuery,
  useUpdateUserMutation,
  useUserQuery,
} from "../../commons/graphql/generated";
//* 이노페이 결제
const REACT_APP_INNOPAY_MID = process.env.REACT_APP_INNOPAY_MID;
const REACT_APP_INNOPAY_MERCHANTKEY = process.env.REACT_APP_INNOPAY_MERCHANTKEY;

const LicenseContainer = () => {
  const navigate = useNavigate();

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

  //* 결제 상품 정보
  const [paymentInput, setPaymentInput] = useState({
    title: "1개월 프리미엄 구독 상품",
    price: 0,
    period: 0,
  });

  //* 결제 모달 상태 및 함수
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //* 유저 정보
  const { data: User } = useUserQuery({
    variables: {
      id: String(user?.tokens![0]?.userId),
    },
  });

  //* 구독 상품 결제
  const [createSubscription] = useCreateSubscriptionHistoryMutation();

  //* 유저의 구독 정보 업데이트
  const [updateSubscriptionUser] = useUpdateUserMutation();

  //* 구매버튼
  const handleBuy = async () => {
    if (!String(user?.tokens![0]?.userId)) {
      alert("로그인 후 이용 가능합니다.");
      navigate("/login");
      return;
    }

    handleInnoPay();
  };

  //* 이노페이 결제 함수 순서 2번
  const InnoPayResult = (data: any) => {
    if (data.data === "close") {
      window.removeEventListener("message", InnoPayResult);
      return;
    } else if (data.data !== "close") {
      var result = JSON.parse(data.data);
      //* 아래 데이터는 필요할 경우 사용하세요
      // var mid = data.data.MID; // 가맹점 MID
      // var tid = data.data.TID; // 거래고유번호
      // var amt = data.data.Amt; // 금액
      // var moid = data.data.MOID; // 주문번호
      // var authdate = data.data.AuthDate; // 승인일자
      // var authcode = data.data.AuthCode; // 승인번호
      // var resultcode = data.data.ResultCode; // 결과코드(PG)
      // var resultmsg = data.data.ResultMsg; // 결과메세지(PG)
      // var errorcode = data.data.ErrorCode; // 에러코드(상위기관)
      // var errormsg = data.data.ErrorMsg; // 에러메세지(상위기관)
      // var EPayCl = data.data.EPayCl;
      if (result.ResultCode === "3001") {
        postPayment(result);
      } else {
        alert("결제 오류가 발생했습니다.");
        window.removeEventListener("message", InnoPayResult);
      }
    }
  };

  //* 이노페이 결제 함수 순서 1번
  const handleInnoPay = async () => {
    const code = `${moment().format("YYYYMMDDHHmmss")}`;
    //@ts-ignore
    innopay.goPay({
      // 필수 파라미터
      PayMethod: "CARD", // 결제수단(CARD,BANK,VBANK,CARS,CSMS,DSMS,EPAY,EBANK)
      MID: REACT_APP_INNOPAY_MID, // 가맹점 MID
      MerchantKey: REACT_APP_INNOPAY_MERCHANTKEY, // 가맹점 라이센스키
      GoodsName: paymentInput.title, // 상품명
      Amt: String(paymentInput.price), // 결제금액(과세)
      BuyerName: User?.user?.name, // 고객명
      BuyerTel: User?.user?.phone, // 고객전화번호
      BuyerEmail: User?.user?.email, // 고객이메일
      ResultYN: "Y", // 결제결과창 출력유뮤
      Moid: `finbig${code}`, // 가맹점에서 생성한 주문번호 셋팅
      Currency: "", // 통화코드가 원화가 아닌 경우만 사용(KRW/USD)
    });
    //* 결제 결과가 아래로 전달 (InnoPayResult 함수 실행)
    window.addEventListener("message", InnoPayResult);
  };

  //* 이노페이 결제 성공시 골드 충전 함수 (결제 함수 순서 3번)
  const postPayment = async (result: any) => {
    try {
      // const code = `${moment().format("YYYYMMDDHHmmss")}`;
      const { data } = await createSubscription({
        variables: {
          input: {
            data: {
              title: paymentInput.title,
              period: paymentInput.period,
              price: paymentInput.price,
              user: String(user?.tokens![0]?.userId),
              MID: result.MID,
              paymentStatus: "결제 완료",
              paymentMethod: "CARD",
            },
          },
        },
      });
      if (User?.user?.isSubscribe) {
        handleAlreadySubscriptionUser(
          data?.createSubscriptionHistory?.subscriptionHistory?.period
        );
      } else {
        handelUpdateSubscriptionUser(
          data?.createSubscriptionHistory?.subscriptionHistory?.created_at,
          data?.createSubscriptionHistory?.subscriptionHistory?.period
        );
      }
    } catch (e) {
      alert("골드 충전에 오류가 발생했습니다. 관리자에게 문의해주세요.");
    }
  };

  //* 유저의 구독 기간 업데이트
  const handelUpdateSubscriptionUser = async (createdAt: any, period: any) => {
    try {
      await updateSubscriptionUser({
        variables: {
          input: {
            data: {
              isSubscribe: true,
              subscriptionDate: createdAt,
              expirationDate: new Date(
                dayjs(createdAt).add(period, "month").format()
              ),
            },
            where: {
              id: String(user?.tokens![0]?.userId),
            },
          },
        },
      });
      alert("구독 정보가 업데이트 됐습니다");
    } catch (e) {
      alert("오류가 발생했습니다.");
    } finally {
      handleClose();
    }
  };

  //* 이미 구독 중일 때 재구독 하는 경우
  const handleAlreadySubscriptionUser = async (period: any) => {
    const newDate = new Date(
      dayjs(User?.user?.expirationDate).add(period, "month").format()
    );
    try {
      await updateSubscriptionUser({
        variables: {
          input: {
            data: {
              isSubscribe: true,
              expirationDate: newDate,
            },
            where: {
              id: String(user?.tokens![0]?.userId),
            },
          },
        },
      });
      alert("구독 정보가 업데이트 됐습니다");
    } catch (e) {
      alert("오류가 발생했습니다.");
    } finally {
      handleClose();
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <script
            type="text/javascript"
            src="https://pg.innopay.co.kr/ipay/js/jquery-2.1.4.min.js"
          ></script>
          <script
            type="text/javascript"
            src="https://pg.innopay.co.kr/ipay/js/innopay-2.0.js"
            charSet="utf-8"
          ></script>
        </Helmet>
      </HelmetProvider>
      <LicensePresenter
        open={open}
        paymentInput={paymentInput}
        setPaymentInput={setPaymentInput}
        handleBuy={handleBuy}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default LicenseContainer;
