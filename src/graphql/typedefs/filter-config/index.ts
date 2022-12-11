import { Pagination } from "./pagination";
import { History } from "./history";

const Common = `
  input FilterConfig {
    pagination: Pagination
    history: HistoryFilterInput
  }
`;

export const FilterConfig = [Common, Pagination, History];
