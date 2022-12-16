import { StringFieldFilter } from "../../field-filters";

export const string = (stringFieldFilter: StringFieldFilter | string) => {
  if (typeof stringFieldFilter === "string") {
    return { string: stringFieldFilter };
  }
  return stringFieldFilter;
};
