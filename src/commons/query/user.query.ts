import { gql } from "@apollo/client";

//* 유저 정보
export const FETCH_USERS = gql`
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
      downloadCount
      subscriptionDate
      expirationDate
      isSubscribe
      created_at
      downloadCount
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

export const FETCH_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      email
      username
      name
      isSubscribe
      expirationDate
      smsReception
      subscriptionDate
      emailReception
      phone
      isAdmin
      isDeleted
      deletedAt
      downloadCount
      finbig_downloads {
        id
        title
        description
        thumbnail
        isBest
        isUpdate
      }
      finbigView {
        id
        title
        description
        thumbnail
        isBest
        isUpdate
      }
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

export const UPDATE_USER = gql`
  mutation updateUser($input: updateUserInput!) {
    updateUser(input: $input) {
      user {
        id
        email
        phone
        smsReception
        expirationDate
        emailReception
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($input: createUserInput!) {
    createUser(input: $input) {
      user {
        id
        email
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`;
