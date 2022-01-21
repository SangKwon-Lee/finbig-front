import { gql } from "@apollo/client";

export const FETCH_SUBSCRIPTION_USERS = gql`
  query users($sort: String, $limit: Int, $start: Int, $where: JSON) {
    users(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      username
      name
      phone
      subscriptionDate
      expirationDate
      isSubscribe
      subscription_histories {
        id
        created_at
        title
        price
        period
      }
    }
  }
`;

export const CANCEL_SUBSCRIPTION_USER = gql`
  mutation updateUser($input: updateUserInput) {
    updateUser(input: $input) {
      user {
        id
      }
    }
  }
`;
