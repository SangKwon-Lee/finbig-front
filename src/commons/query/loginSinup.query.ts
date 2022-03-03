import { gql } from "@apollo/client";

// 이메일
export const EMAIL_AUTH = gql`
  mutation createEmailAuth($input: createEmailAuthInput) {
    createEmailAuth(input: $input) {
      emailAuth {
        code
      }
    }
  }
`;

export const EMAIL_AUTH_CHECK = gql`
  query emailAuths {
    emailAuths {
      id
      code
    }
  }
`;

export const DELETE_EMAIL_AUTH = gql`
  mutation deleteEmailAuth($input: deleteEmailAuthInput) {
    deleteEmailAuth(input: $input) {
      emailAuth {
        id
        code
      }
    }
  }
`;

// 구독정보
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

// 로그인

export const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
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

export const CREATE_TOKEN = gql`
  mutation createToken($input: createTokenInput!) {
    createToken(input: $input) {
      token {
        id
      }
    }
  }
`;

export const FETCH_TOKEN = gql`
  mutation fetchToken($userId: String, $token: String) {
    fetchToken(userId: $userId, token: $token) {
      id
      token
      userId
    }
  }
`;

export const UPDATE_TOKEN = gql`
  mutation updateToken($input: updateTokenInput) {
    updateToken(input: $input) {
      token {
        id
        token
      }
    }
  }
`;

export const DELETE_TOKEN = gql`
  mutation deleteToken($input: deleteTokenInput) {
    deleteToken(input: $input) {
      token {
        id
      }
    }
  }
`;

export const GET_TOKEN = gql`
  query token($id: ID!) {
    token(id: $id) {
      id
      created_at
      userId
      token
    }
  }
`;

export const FETCH_TOKENS = gql`
  query tokens($sort: String, $limit: Int, $start: Int, $where: JSON) {
    tokens(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      userId
      token
    }
  }
`;

// 회원가입
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
