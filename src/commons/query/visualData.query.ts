import { gql } from "@apollo/client";

//* 시각화 데이터
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
        thumbnail
        description
      }
    }
  }
`;

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

export const UPDATE_VISUAL_DATUM = gql`
  mutation updateVisualDatum($input: updateVisualDatumInput) {
    updateVisualDatum(input: $input) {
      visualDatum {
        id
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
