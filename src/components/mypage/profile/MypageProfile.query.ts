import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      created_at
      username
      email
      name
      phone
      smsReception
      emailReception
    }
  }
`;

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

export const UPDATE_USER = gql`
  mutation updateUser($input: updateUserInput!) {
    updateUser(input: $input) {
      user {
        id
        phone
        smsReception
        emailReception
      }
    }
  }
`;
