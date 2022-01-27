import { gql } from "@apollo/client";

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
      }
    }
  }
`;

export const FETCH_USER_VIEWDATA = gql`
  query user($id: ID!) {
    user(id: $id) {
      finbigView {
        id
        title
      }
    }
  }
`;

export const UPDATE_RECENT_DATA = gql`
  mutation updateUser($input: updateUserInput) {
    updateUser(input: $input) {
      user {
        finbigView {
          id
          title
        }
      }
    }
  }
`;
