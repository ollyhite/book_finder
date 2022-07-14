import { gql } from "@apollo/client";

// export const QUERY_PROFILES = gql`
//   query allProfiles {
//     Users {
//       _id
//       username
//       email
//       savedBooks
//     }
//   }
// `;

// export const QUERY_SINGLE_PROFILE = gql`
//   query singleProfile($userId: ID!) {
//     User(userId: $userId) {
//       _id
//       username
//       email
//       savedBooks
//     }
//   }
// `;

export const GET_ME = gql`
  query me {
    me {
      _id
      name
      savedBooks
    }
  }
`;
