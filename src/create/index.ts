import { string } from "./strings";
import { int } from "./ints";
import { date } from "./dates";
import { boolean } from "./booleans";

import { history } from "./history";
import { pagination } from "./pagination";

export const fieldFilter = {
  string,
  int,
  date,
  boolean,
};

export const filterConfig = {
  history,
  pagination,
};
