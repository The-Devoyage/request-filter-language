import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";
import { typeDefs as scalars } from "graphql-scalars";

export const GraphQL = {
  typeDefs: [...typeDefs, ...scalars],
  resolvers,
};
