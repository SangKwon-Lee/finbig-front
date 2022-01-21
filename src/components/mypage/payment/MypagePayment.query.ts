import { gql } from "@apollo/client";

export const FETCH_USER_PAYMENT = gql`
  query user($id: ID!) {
    user(id: $id) {
      isSubscribe
      expirationDate
      subscription_histories {
        id
        title
        price
        period
        created_at
        paymentMethod
        paymentStatus
      }
    }
  }
`;
