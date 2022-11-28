import { z } from "zod";

export const StringFilterByOptionsSchema = z.enum([
  "MATCH",
  "OBJECTID",
  "REGEX",
]);

export type StringFilterByOptions = z.infer<typeof StringFilterByOptionsSchema>;
export * from "./string";
export * from "./string-array";
