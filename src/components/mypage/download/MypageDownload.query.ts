import { gql } from "@apollo/client";

export const FETCH_USER_DOWNLOAD = gql`
  query user($id: ID!) {
    user(id: $id) {
      finbigDownload {
        id
        title
        description
        thumbnail
        isBest
      }
    }
  }
`;
