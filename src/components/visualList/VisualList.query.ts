import { gql } from "@apollo/client";

export const FETCH_VISUAL_COUNT = gql`
  query visualDataConnection($where: JSON) {
    visualDataConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;
