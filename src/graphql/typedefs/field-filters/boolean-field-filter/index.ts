export const BooleanFieldFilter = `
  enum BooleanFilterByEnum {
    EQ
    NE
  }

  input BooleanFieldFilter {
    bool: Boolean!
    filterBy: BooleanFilterByEnum
    operator: OperatorFieldConfigEnum
    groups: [String!]
  }
`;
