import { gql } from "@apollo/client";

export const UPDATE_ISBEST = gql`
  mutation updateFinbig($input: updateFinbigInput) {
    updateFinbig(input: $input) {
      finbig {
        id
        title
      }
    }
  }
`;

export const FETCH_FINBIGS_ID = gql`
  query finbigs($sort: String, $limit: Int, $start: Int, $where: JSON) {
    finbigs(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
    }
  }
`;
