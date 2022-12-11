export const StringFieldFilter = `
  enum StringFilterByEnum {
    REGEX
    MATCH
    OBJECTID
  }

  input StringFieldFilter {
    string: String!
    filterBy: StringFilterByEnum
    operator: OperatorFieldConfigEnum
    groups: [String!]
  }

  input StringArrayFieldFilter {
    string: [String!]!
    filterBy: StringFilterByEnum
    arrayOptions: ArrayFilterByEnum!
    operator: OperatorFieldConfigEnum
    groups: [String!]
  }
`;
