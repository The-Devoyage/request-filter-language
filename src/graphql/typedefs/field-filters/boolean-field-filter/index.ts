import { gql } from "apollo-server-core";

export const BooleanFieldFilter = gql`
  enum BooleanFilterByEnum {
    EQ
    NE
  }

  input BooleanFieldFilter {
    bool: Boolean!
    filterBy: BooleanFilterByEnum!
    operator: OperatorFieldConfigEnum
    groups: [String!]
  }
`;
