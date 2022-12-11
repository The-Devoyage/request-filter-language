export const DateFieldFilter = `
  enum DateFilterByEnum {
    EQ
    GT
    LT
    GTE
    LTE
    NE
  }

  input DateFieldFilter {
    date: DateTime!
    filterBy: DateFilterByEnum
    operator: OperatorFieldConfigEnum
    groups: [String!]
  }
`;
