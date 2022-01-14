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
      id
    }
  }
`;
