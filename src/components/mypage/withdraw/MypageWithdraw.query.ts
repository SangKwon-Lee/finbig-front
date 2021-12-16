import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation updateUser($input: updateUserInput!) {
    updateUser(input: $input) {
      user {
        id
      }
    }
  }
`;
