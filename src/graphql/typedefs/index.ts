import { FieldFilters } from "./field-filters";
import { FilterConfig } from "./filter-config";
import { Stats } from "./stats";

export const typeDefs = [...FieldFilters, ...FilterConfig, Stats];
