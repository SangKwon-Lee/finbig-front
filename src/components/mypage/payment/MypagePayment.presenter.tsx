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
          {paymentHistory?.user?.expirationDate ? (
            <MypagePaymentDayTitle>
              나의 남은 구독일은
              <MypagePaymentDay>
                {D_day(paymentHistory?.user?.expirationDate)}
              </MypagePaymentDay>
              일 입니다.
            </MypagePaymentDayTitle>
          ) : (
            <MypagePaymentDayTitle>
              구독중인 상품이 없습니다
            </MypagePaymentDayTitle>
          )}
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
            세금계산서 발행을 원하시는 분은 support@innofin.co.kr로
            <br />
            이름, 연락처, 아이디, 결제일자를 보내주세요.
            <br />
          </MypagePaymentInfoText>
        </MypageBodyColumn>
      </MypageBody>
    </MypagePaymentWrapper>
  );
};

export default MypagePaymentPresenter;
