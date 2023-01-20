import {
  typeDefs,
  HistoricStats,
  HistoricStatsId,
  History,
  Pagination,
  ArrayFilterByEnum,
  OperatorFieldConfigEnum,
  StringFieldFilter,
  IntFieldFilter,
  BooleanFieldFilter,
  DateFieldFilter,
  Stats,
} from "./typedefs";
import { resolvers } from "./resolvers";
import { typeDefs as scalars } from "graphql-scalars";

export const GraphQL = {
  typeDefs: [...typeDefs, ...scalars],
  resolvers,
  History,
  DateFieldFilter,
  StringFieldFilter,
  IntFieldFilter,
  BooleanFieldFilter,
  OperatorFieldConfigEnum,
  ArrayFilterByEnum,
  HistoricStatsId,
  HistoricStats,
  Pagination,
  Stats,
};
