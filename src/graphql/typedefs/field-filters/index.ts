import { StringFieldFilter } from "./string-field-filter";
import { DateFieldFilter } from "./date-field-filter";
import { IntFieldFilter } from "./int-field-filter";
import { BooleanFieldFilter } from "./boolean-field-filter";

const ArrayFilterByEnum = `
  enum ArrayFilterByEnum {
    IN
    NIN
  }
`;

const OperatorFieldConfigEnum = `
  enum OperatorFieldConfigEnum {
    AND
    OR
  }
`;

export const FieldFilters = [
  ArrayFilterByEnum,
  OperatorFieldConfigEnum,
  StringFieldFilter,
  IntFieldFilter,
  BooleanFieldFilter,
  DateFieldFilter,
];

export {
  ArrayFilterByEnum,
  OperatorFieldConfigEnum,
  StringFieldFilter,
  IntFieldFilter,
  BooleanFieldFilter,
  DateFieldFilter,
};
