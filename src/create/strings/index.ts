import { StringFieldFilter } from "../../schemas";

export const string = (stringFieldFilter: StringFieldFilter | string) => {
  if (typeof stringFieldFilter === "string") {
    return { string: stringFieldFilter };
  }
  return stringFieldFilter;
};
