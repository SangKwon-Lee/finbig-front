import { gql } from "@apollo/client";

export const FETCH_VISUAL_DATA = gql`
  query visualData($sort: String, $limit: Int, $start: Int, $where: JSON) {
    visualData(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      created_at
      title
      category
      description
      viewCount
      isShow
      contents
      thumbnail
    }
  }
`;

export const FETCH_VISUAL_COUNT = gql`
  query visualDataConnection($where: JSON) {
    visualDataConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const DELETE_VISUAL_DATUM = gql`
  mutation deleteVisualDatum($input: deleteVisualDatumInput) {
    deleteVisualDatum(input: $input) {
      visualDatum {
        id
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
