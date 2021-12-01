import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query users($where: JSON) {
    users(where: $where) {
      id
      email
      name
      username
      created_at
    }
  }
`;

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

export const UPDATE_USER = gql`
  mutation updateUser($input: updateUserInput) {
    updateUser(input: $input) {
      user {
        email
      }
    }
  }
`;
