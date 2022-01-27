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
      finbigs {
        id
        title
      }
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

export const FETCH_FINBIGS = gql`
  query finbigs($sort: String, $limit: Int, $start: Int, $where: JSON) {
    finbigs(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      title
      category
      isShow
      created_at
      updated_at
    }
  }
`;
