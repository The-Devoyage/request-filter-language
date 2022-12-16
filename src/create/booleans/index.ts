import { BooleanFieldFilter } from "../../field-filters";

export const boolean = (booleanFieldFilter: BooleanFieldFilter | boolean) => {
  if (typeof booleanFieldFilter === "boolean")
    return { bool: booleanFieldFilter };
  return booleanFieldFilter;
};
