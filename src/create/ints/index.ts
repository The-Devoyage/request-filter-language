import { IntFieldFilter } from "../../field-filters";

export const int = (intFieldFilter: IntFieldFilter | number) => {
  if (typeof intFieldFilter === "number") return { int: intFieldFilter };
  return intFieldFilter;
};
