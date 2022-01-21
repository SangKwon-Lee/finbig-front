import { gql } from "@apollo/client";

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

export const FETCH_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      isDeleted
      username
      email
      name
      phone
      isSubscribe
      expirationDate
    }
  }
`;

export const UPDATE_IS_SUBSCRIPTION_USER = gql`
  mutation updateUser($input: updateUserInput) {
    updateUser(input: $input) {
      user {
        id
      }
    }
  }
`;
