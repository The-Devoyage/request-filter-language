import { BooleanFieldFilter } from "../../schemas";

export const boolean = (booleanFieldFilter: BooleanFieldFilter | boolean) => {
  if (typeof booleanFieldFilter === "boolean")
    return { bool: booleanFieldFilter };
  return booleanFieldFilter;
};
