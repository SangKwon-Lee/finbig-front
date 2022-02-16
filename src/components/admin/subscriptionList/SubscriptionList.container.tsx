import {
  useUpdateUserMutation,
  useUsersQuery,
} from "../../../commons/graphql/generated";
import WithAdminAuth from "../../common/hocs/withAdminAuth";
import SubscriptionPresenter from "./SubscriptionList.presenter";

const SubscriptionContainer = () => {
  //* 구독한 유저들의 목록
  const { data, refetch, loading } = useUsersQuery({
    variables: {
      where: {
        isSubscribe: true,
      },
    },
  });

  //* 구독 해지 뮤테이션
  const [cancleSubscription] = useUpdateUserMutation();

  //* 구독 해지 버튼
  const handlecancelSubscription = async (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    try {
      await cancleSubscription({
        variables: {
          input: {
            data: {
              isSubscribe: false,
              expirationDate: new Date(),
            },
            where: {
              id: String(id),
            },
          },
        },
      });
      refetch();
      alert("해지 되었습니다.");
    } catch (e) {
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <SubscriptionPresenter
      subscriptionList={data}
      loading={loading}
      handlecancelSubscription={handlecancelSubscription}
    />
  );
};
export default WithAdminAuth(SubscriptionContainer);
