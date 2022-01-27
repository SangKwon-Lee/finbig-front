import { gql } from "@apollo/client";

export const FETCH_VISUAL_DATUM = gql`
  query visualDatum($id: ID!) {
    visualDatum(id: $id) {
      id
      created_at
      title
      category
      description
      viewCount
      contents
      thumbnail
      finbigs {
        id
        title
        thumbnail
        description
      }
    }
  }
`;
