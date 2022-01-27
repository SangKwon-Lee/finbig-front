import { gql } from "@apollo/client";

export const FETCH_USER_VIEWDATA = gql`
  query user($id: ID!) {
    user(id: $id) {
      finbigView {
        id
        title
        description
        thumbnail
        isBest
      }
    }
  }
`;
