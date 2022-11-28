import { gql } from "apollo-server-core";

export const Pagination = gql`
  input Pagination {
    limit: Int
    reverse: Boolean
    createdAt: DateTime
  }
`;
