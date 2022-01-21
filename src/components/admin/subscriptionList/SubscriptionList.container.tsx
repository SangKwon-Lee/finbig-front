import { useMutation, useQuery } from "@apollo/client";
import {
  Mutation,
  MutationUpdateUserArgs,
  Query,
  QueryUsersArgs,
} from "../../../commons/types/generated/types";
import SubscriptionPresenter from "./SubscriptionList.presenter";
import {
  CANCEL_SUBSCRIPTION_USER,
  FETCH_SUBSCRIPTION_USERS,
} from "./SubscriptionList.query";

const SubscriptionContainer = () => {
  const { data, refetch } = useQuery<Query, QueryUsersArgs>(
    FETCH_SUBSCRIPTION_USERS,
    {
      variables: {
        where: {
          isSubscribe: true,
        },
      },
    }
  );

  //* 구독 해지 뮤테이션
  const [cancleSubscription] = useMutation<Mutation, MutationUpdateUserArgs>(
    CANCEL_SUBSCRIPTION_USER
  );

  //* 구독 해지 버튼
  const handlecancelSubscription = async (e: any) => {
    try {
      await cancleSubscription({
        variables: {
          input: {
            data: {
              isSubscribe: false,
              expirationDate: new Date(),
            },
            where: {
              id: String(e.target.id),
            },
          },
        },
      });
      refetch();
      alert("해지 되었습니다.");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SubscriptionPresenter
      subscriptionList={data?.users}
      handlecancelSubscription={handlecancelSubscription}
    />
  );
};
export default SubscriptionContainer;
