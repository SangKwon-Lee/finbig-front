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
      relationFinbigs {
        id
        title
        description
        thumbnail
      }
    }
  }
`;

export const FETCH_USER_IS_SUBSCRIPTION = gql`
  query user($id: ID!) {
    user(id: $id) {
      isSubscribe
      finbigDownload {
        id
        title
      }
    }
  }
`;

export const UPDATE_DOWNLOAD_DATA = gql`
  mutation updateUser($input: updateUserInput) {
    updateUser(input: $input) {
      user {
        finbigDownload {
          id
          title
        }
      }
    }
  }
`;
