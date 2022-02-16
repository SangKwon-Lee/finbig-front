import dayjs from "dayjs";
import { D_day } from "../../../utils/D_day";
import { priceToString } from "../../../utils/priceToString";
import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import {
  MypageBody,
  MypagePaymentTableTitle,
  MypagePayMentTableHeader,
  MypagePaymentTableWrapper,
  MypagePaymentWrapper,
  MypagePaymentTableContents,
  MypagePaymentInfoTitle,
  MypageBodyColumn,
  MypagePaymentInfoText,
  MypagePaymentDayTitle,
  MypagePaymentDay,
} from "./MypagePayment.style";
import { UserQuery } from "../../../commons/graphql/generated";
interface MypagePaymentProps {
  paymentHistory?: UserQuery | undefined;
}

const MypagePaymentPresenter: React.FC<MypagePaymentProps> = ({
  paymentHistory,
}) => {
  return (
    <MypagePaymentWrapper>
      <MypageBody>
        <MypageLayoutContainer menu="payment" />
        <MypageBodyColumn>
          <MypagePaymentDayTitle>
            나의 남은 구독일은
            <MypagePaymentDay>
              {D_day(paymentHistory?.user?.expirationDate)}{" "}
            </MypagePaymentDay>
            일 입니다.
          </MypagePaymentDayTitle>
          <MypagePaymentTableWrapper>
            <MypagePayMentTableHeader style={{ backgroundColor: "#f3f3f3" }}>
              <MypagePaymentTableTitle>결제일</MypagePaymentTableTitle>
              <MypagePaymentTableTitle style={{ flex: 1.5 }}>
                상품명
              </MypagePaymentTableTitle>
              <MypagePaymentTableTitle>결제수단</MypagePaymentTableTitle>
              <MypagePaymentTableTitle>결제상태</MypagePaymentTableTitle>
              <MypagePaymentTableTitle style={{ borderRight: "none" }}>
                결제금액
              </MypagePaymentTableTitle>
            </MypagePayMentTableHeader>
            {paymentHistory?.user?.subscription_histories &&
              paymentHistory?.user?.subscription_histories
                .map((data) => (
                  <MypagePayMentTableHeader key={data?.id}>
                    <MypagePaymentTableContents>
                      {dayjs(data?.created_at).format("YYYY.MM.DD")}
                    </MypagePaymentTableContents>
                    <MypagePaymentTableContents style={{ flex: 1.5 }}>
                      {data?.title}
                    </MypagePaymentTableContents>
                    <MypagePaymentTableContents>
                      {data?.paymentMethod === "CARD" ? "카드 결제" : "결제"}
                    </MypagePaymentTableContents>
                    <MypagePaymentTableContents>
                      {data?.paymentStatus}
                    </MypagePaymentTableContents>
                    <MypagePaymentTableContents style={{ borderRight: "none" }}>
                      {priceToString(data?.price)}
                    </MypagePaymentTableContents>
                  </MypagePayMentTableHeader>
                ))
                .reverse()}
          </MypagePaymentTableWrapper>
          <MypagePaymentInfoTitle>
            세금계산서 발행에 대한 안내
          </MypagePaymentInfoTitle>
          <MypagePaymentInfoText>
            세금계산서를 사업자등록증이 있으신 회원님을 대상으로 발행해 드리고
            있습니다.
            <br /> 세금계산서는 되도록 회원 가입 시 발행을 요청해 주시고, 만약
            미처 발행을 받지 못하신 분들은 추가 발급기간에 요청해 주십시오.
            <br />
            (추가 발급기간 : 가입완료 후 24시간 이내)
          </MypagePaymentInfoText>
        </MypageBodyColumn>
      </MypageBody>
    </MypagePaymentWrapper>
  );
};

export default MypagePaymentPresenter;
