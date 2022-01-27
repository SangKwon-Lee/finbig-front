import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      username
      subscriptionDate
      expirationDate
      isSubscribe
      finbigDownload {
        id
        title
        thumbnail
        description
        isBest
      }
      subscription_histories {
        id
        title
      }
    }
  }
`;
