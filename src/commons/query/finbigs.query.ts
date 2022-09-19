import { gql } from "@apollo/client";

// 빅데이터
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
      isUpdate
      downloadPeriod
      relationFinbigs {
        id
        title
        description
        thumbnail
      }
    }
  }
`;

export const FETCH_FINBIGS = gql`
  query finbigs($sort: String, $limit: Int, $start: Int, $where: JSON) {
    finbigs(sort: $sort, limit: $limit, start: $start, where: $where) {
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
      isUpdate
    }
  }
`;

export const FETCH_FINBIGS_COUNT = gql`
  query finbigsConnection($where: JSON) {
    finbigsConnection(where: $where) {
      aggregate {
        count
        totalCount
      }
    }
  }
`;

export const UPDATE_FINBIG_VIEWCOUNT = gql`
  mutation updateFinbig($input: updateFinbigInput) {
    updateFinbig(input: $input) {
      finbig {
        id
        title
      }
    }
  }
`;
