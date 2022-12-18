import { z } from "zod";
import { BooleanFilterByOptionsSchema } from "./booleans";
import { BooleanFieldFilterSchema } from "./booleans/boolean";
import { DateFilterByOptionsSchema } from "./dates";
import { DateFieldFilterSchema } from "./dates/date";
import { IntFilterByOptionsSchema } from "./ints";
import { IntFieldFilterSchema } from "./ints/int";
import { StringFilterByOptionsSchema } from "./strings";
import { StringFieldFilterSchema } from "./strings/string";
import { StringArrayFieldFilterSchema } from "./strings/string-array";

export const FieldFilterSchema = z.union([
  StringFieldFilterSchema,
  StringArrayFieldFilterSchema,
  IntFieldFilterSchema,
  BooleanFieldFilterSchema,
  DateFieldFilterSchema,
]);

export const FilterByOptionsSchema = z.union([
  StringFilterByOptionsSchema,
  IntFilterByOptionsSchema,
  BooleanFilterByOptionsSchema,
  DateFilterByOptionsSchema,
]);

export type FieldFilter = z.infer<typeof FieldFilterSchema>;
export type FilterByOptions = z.infer<typeof FilterByOptionsSchema>;

export * from "./booleans";
export * from "./ints";
export * from "./dates";
export * from "./strings";
export * from "./common";
