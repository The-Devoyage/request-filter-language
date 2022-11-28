import { gql } from "apollo-server-core";
import { Pagination } from "./pagination";
import { History } from "./history";

const Common = gql`
  input FilterConfig {
    pagination: Pagination
    history: HistoryFilterInput
  }
`;

export const FilterConfig = { Common, Pagination, History };
