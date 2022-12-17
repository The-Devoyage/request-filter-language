import { StringArrayFieldFilter, StringFieldFilter } from "../../schemas";

export const string = (stringFieldFilter: StringFieldFilter | string) => {
  if (typeof stringFieldFilter === "string") {
    return { string: stringFieldFilter };
  }
  return stringFieldFilter;
};

export const strings = (
  stringArrayFieldFilter: StringArrayFieldFilter | string[]
) => {
  if (Array.isArray(stringArrayFieldFilter)) {
    return { strings: stringArrayFieldFilter };
  }
  return stringArrayFieldFilter;
};
