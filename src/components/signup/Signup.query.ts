import { gql } from "@apollo/client";

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

export const EMAIL_AUTH = gql`
  mutation createEmailAuth($input: createEmailAuthInput) {
    createEmailAuth(input: $input) {
      emailAuth {
        id
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

export const FETCH_USERS = gql`
  query users($where: JSON) {
    users(where: $where) {
      id
      email
    }
  }
`;
