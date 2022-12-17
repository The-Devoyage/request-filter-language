import { z } from "zod";

export const IntFilterByOptionsSchema = z.enum([
  "EQ",
  "GT",
  "GTE",
  "LT",
  "LTE",
  "NE",
]);

export type IntFilterByOptions = z.infer<typeof IntFilterByOptionsSchema>;
export * from "./int";
