import { StringFieldFilter, StringArrayFieldFilter } from "./strings";
import { IntFieldFilter } from "./ints";
import { DateFieldFilter } from "./dates";
import { BooleanFieldFilter } from "./booleans";
import { History } from "./history";
import { Pagination } from "./pagination";

export const fieldFilter = {
  string: StringFieldFilter,
  int: IntFieldFilter,
  date: DateFieldFilter,
  strings: StringArrayFieldFilter,
  bool: BooleanFieldFilter,
};

export const filterConfig = {
  history: History,
  pagination: Pagination,
};

export { StatsReturn } from "./stats-return";
