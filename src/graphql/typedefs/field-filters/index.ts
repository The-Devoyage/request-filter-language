import { gql } from "apollo-server-core";
import { StringFieldFilter } from "./string-field-filter";
import { DateFieldFilter } from "./date-field-filter";
import { IntFieldFilter } from "./int-field-filter";
import { BooleanFieldFilter } from "./boolean-field-filter";

const Common = gql`
  enum OperatorFieldConfigEnum {
    AND
    OR
  }

  enum ArrayFilterByEnum {
    IN
    NIN
  }
`;
export const FieldFilters = {
  Common,
  StringFieldFilter,
  IntFieldFilter,
  BooleanFieldFilter,
  DateFieldFilter,
};
