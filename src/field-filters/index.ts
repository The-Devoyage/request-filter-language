import { z } from "zod";
import { BooleanFieldFilterSchema } from "./booleans/boolean";
import { DateFieldFilterSchema } from "./dates/date";
import { IntFieldFilterSchema } from "./ints/int";
import { StringFieldFilterSchema } from "./strings/string";
import { StringArrayFieldFilterSchema } from "./strings/string-array";

export const ArrayFilterByOptionsSchema = z.enum(["IN", "NIN"]);
export const OperatorOptionsSchema = z.enum(["AND", "OR"]);
export const GroupNameSchema = z.union([
  z.string().endsWith(".and"),
  z.string().endsWith(".or"),
]);

export const FieldFiltersSchema = z.union([
  StringFieldFilterSchema,
  StringArrayFieldFilterSchema,
  IntFieldFilterSchema,
  BooleanFieldFilterSchema,
  DateFieldFilterSchema,
]);

export type ArrayFilterByOptions = z.infer<typeof ArrayFilterByOptionsSchema>;
export type OperatorOptions = z.infer<typeof OperatorOptionsSchema>;
export type FieldFilter = z.infer<typeof FieldFiltersSchema>;
export * from "./booleans";
export * from "./ints";
export * from "./dates";
export * from "./strings";
