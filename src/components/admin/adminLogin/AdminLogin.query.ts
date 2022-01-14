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
