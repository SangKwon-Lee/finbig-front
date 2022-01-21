import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      username
      email
      name
      phone
      isSubscribe
      expirationDate
    }
  }
`;

export const UPDATE_SUBSCRIPTION_USER = gql`
  mutation updateUser($input: updateUserInput) {
    updateUser(input: $input) {
      user {
        id
        expirationDate
      }
    }
  }
`;

export const CREATE_SUBSCRIPTION_HISTORY = gql`
  mutation createSubscriptionHistory($input: createSubscriptionHistoryInput) {
    createSubscriptionHistory(input: $input) {
      subscriptionHistory {
        id
        created_at
        period
      }
    }
  }
`;
