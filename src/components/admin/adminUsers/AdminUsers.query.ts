import { gql } from "@apollo/client";

export const USERS = gql`
  query users($sort: String, $limit: Int, $start: Int, $where: JSON) {
    users(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      email
      username
      name
      smsReception
      emailReception
      phone
      isDeleted
      deletedAt
    }
  }
`;
