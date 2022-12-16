import { DateFieldFilter } from "../../field-filters";

export const date = (dateFieldFilter: DateFieldFilter | Date) => {
  if (
    typeof dateFieldFilter === "object" &&
    Object.prototype.toString.call(dateFieldFilter) === "[object Date]"
  ) {
    return { date: dateFieldFilter };
  }
  return dateFieldFilter;
};
