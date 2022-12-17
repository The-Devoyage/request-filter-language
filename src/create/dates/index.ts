import { DateFieldFilter } from "../../schemas";

export const date = (dateFieldFilter: DateFieldFilter | Date) => {
  if (
    typeof dateFieldFilter === "object" &&
    Object.prototype.toString.call(dateFieldFilter) === "[object Date]"
  ) {
    return { date: dateFieldFilter };
  }
  return dateFieldFilter;
};
