import { z } from "zod";
import { BooleanFieldFilterSchema } from "./booleans/boolean";
import { DateFieldFilterSchema } from "./dates/date";
import { IntFieldFilterSchema } from "./ints/int";
import { StringFieldFilterSchema } from "./strings/string";
import { StringArrayFieldFilterSchema } from "./strings/string-array";

export const FieldFiltersSchema = z.union([
  StringFieldFilterSchema,
  StringArrayFieldFilterSchema,
  IntFieldFilterSchema,
  BooleanFieldFilterSchema,
  DateFieldFilterSchema,
]);

export type FieldFilter = z.infer<typeof FieldFiltersSchema>;

export * from "./booleans";
export * from "./ints";
export * from "./dates";
export * from "./strings";
