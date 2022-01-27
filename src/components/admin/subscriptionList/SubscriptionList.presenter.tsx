import dayjs from "dayjs";
import {
  Maybe,
  UsersPermissionsUser,
} from "../../../commons/types/generated/types";
import { D_day } from "../../../utils/D_day";
import AdminLayoutContainer from "../../common/layout/admin/AdminLayout.container";
import {
  SubscriptionListBody,
  SubscriptionListWrapper,
  SubscriptionListTitle,
  SubscriptionTableWrapper,
  SubscriptionTableHeader,
  SubscriptionTableTitle,
  SubscriptionCancelBtn,
} from "./SubscriptionList.style";

interface SubscriptionProps {
  subscriptionList: Maybe<Maybe<UsersPermissionsUser>[]> | undefined;
  handlecancelSubscription: (e: any) => Promise<void>;
}

const SubscriptionPresenter: React.FC<SubscriptionProps> = ({
  subscriptionList,
  handlecancelSubscription,
}) => {
  return (
    <SubscriptionListWrapper>
      <AdminLayoutContainer menu="구독"></AdminLayoutContainer>
      <SubscriptionListBody>
        <SubscriptionListTitle>구독관리</SubscriptionListTitle>
        <SubscriptionTableWrapper>
          <SubscriptionTableHeader style={{ backgroundColor: "#e9e9e9" }}>
            <SubscriptionTableTitle style={{ flex: 0.4 }}>
              순번
            </SubscriptionTableTitle>
            <SubscriptionTableTitle style={{ flex: 2 }}>
              구독 상품명
            </SubscriptionTableTitle>
            <SubscriptionTableTitle>구매금액</SubscriptionTableTitle>
            <SubscriptionTableTitle>ID</SubscriptionTableTitle>
            <SubscriptionTableTitle>회원명</SubscriptionTableTitle>
            <SubscriptionTableTitle style={{ flex: 1.5 }}>
              연락처
            </SubscriptionTableTitle>
            <SubscriptionTableTitle>구독 개월</SubscriptionTableTitle>
            <SubscriptionTableTitle>구독 시작일</SubscriptionTableTitle>
            <SubscriptionTableTitle>
              구독 종료일 <br />
              남은 구독일
            </SubscriptionTableTitle>
            <SubscriptionTableTitle style={{ flex: 1.5 }}>
              데이터 다운로드 수
            </SubscriptionTableTitle>
            <SubscriptionTableTitle style={{ borderRight: "none" }}>
              구독해지
            </SubscriptionTableTitle>
          </SubscriptionTableHeader>
          {subscriptionList &&
            subscriptionList.map((data) => (
              <SubscriptionTableHeader key={data?.id}>
                <SubscriptionTableTitle style={{ flex: 0.4 }}>
                  {data?.id}
                </SubscriptionTableTitle>
                <SubscriptionTableTitle style={{ flex: 2 }}>
                  {data?.subscription_histories &&
                    data?.subscription_histories[
                      data?.subscription_histories.length - 1
                    ]?.title}
                </SubscriptionTableTitle>
                <SubscriptionTableTitle>
                  {data?.subscription_histories &&
                    data?.subscription_histories[
                      data?.subscription_histories.length - 1
                    ]?.price}
                </SubscriptionTableTitle>
                <SubscriptionTableTitle>
                  {data?.username}
                </SubscriptionTableTitle>
                <SubscriptionTableTitle>{data?.name}</SubscriptionTableTitle>
                <SubscriptionTableTitle style={{ flex: 1.5 }}>
                  {data?.phone}
                </SubscriptionTableTitle>
                <SubscriptionTableTitle>
                  {data?.subscription_histories &&
                    data?.subscription_histories[
                      data?.subscription_histories.length - 1
                    ]?.period}
                </SubscriptionTableTitle>
                <SubscriptionTableTitle>
                  {dayjs(data?.subscriptionDate).format("YYYY.MM.DD")}
                </SubscriptionTableTitle>
                <SubscriptionTableTitle>
                  {dayjs(data?.expirationDate).format("YYYY.MM.DD")}
                  <br />
                  {D_day(data?.expirationDate)}
                </SubscriptionTableTitle>
                <SubscriptionTableTitle style={{ flex: 1.5 }}>
                  임시
                </SubscriptionTableTitle>
                <SubscriptionTableTitle style={{ borderRight: "none" }}>
                  <SubscriptionCancelBtn
                    id={data?.id}
                    onClick={handlecancelSubscription}
                  >
                    해지
                  </SubscriptionCancelBtn>
                </SubscriptionTableTitle>
              </SubscriptionTableHeader>
            ))}
        </SubscriptionTableWrapper>
      </SubscriptionListBody>
    </SubscriptionListWrapper>
  );
};
export default SubscriptionPresenter;
