import { z } from "zod";

export const DateFilterByOptionsSchema = z.enum([
  "EQ",
  "NE",
  "GT",
  "LT",
  "GTE",
  "LTE",
]);

export type DateFilterByOptions = z.infer<typeof DateFilterByOptionsSchema>;
export * from "./date";
