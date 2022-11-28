import { gql } from "apollo-server-core";

export const IntFieldFilter = gql`
  enum IntFilterByEnum {
    EQ
    GT
    LT
    GTE
    LTE
    NE
  }

  input IntFieldFilter {
    int: Int!
    filterBy: IntFilterByEnum!
    operator: OperatorFieldConfigEnum
    groups: [String!]
  }
`;
