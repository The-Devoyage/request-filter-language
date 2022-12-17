import { Pagination } from "./pagination";
import { History } from "./history";

const Common = `
  input FilterConfig {
    pagination: Pagination
    history: HistoryFilterInput
  }
`;

const FilterConfig = [Common, Pagination, History];

export { FilterConfig, Pagination, History };
