import { gql } from "@apollo/client";

export const FETCH_ADMINISTRATOR = gql`
  mutation FetchAdministrator($username: String!, $password: String!) {
    FetchAdministrator(username: $username, password: $password) {
      id
      name
      username
    }
  }
`;

export const FETCH_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      isAdmin
    }
  }
`;
