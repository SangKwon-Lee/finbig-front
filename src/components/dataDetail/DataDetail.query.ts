import { gql } from "@apollo/client";

export const FETCH_FINBIG = gql`
  query finbig($id: ID!) {
    finbig(id: $id) {
      id
      created_at
      updated_at
      title
      description
      thumbnail
      order
      viewCount
      isBest
      category
      type
      period
      contents
      isShow
      apiName
    }
  }
`;
