import { gql } from "@apollo/client";

export const CREATE_VISUAL_DATUM = gql`
  mutation createVisualDatum($input: createVisualDatumInput) {
    createVisualDatum(input: $input) {
      visualDatum {
        id
        title
      }
    }
  }
`;

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
    }
  }
`;

export const UPDATE_VISUAL_DATUM = gql`
  mutation updateVisualDatum($input: updateVisualDatumInput) {
    updateVisualDatum(input: $input) {
      visualDatum {
        id
      }
    }
  }
`;
