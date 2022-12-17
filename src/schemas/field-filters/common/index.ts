import { z } from "zod";

export const ArrayFilterByOptionsSchema = z.enum(["IN", "NIN"]);
export const OperatorOptionsSchema = z.enum(["AND", "OR"]);
export const GroupNameSchema = z.union([
  z.string().endsWith(".and"),
  z.string().endsWith(".or"),
]);

export type ArrayFilterByOptions = z.infer<typeof ArrayFilterByOptionsSchema>;
export type OperatorOptions = z.infer<typeof OperatorOptionsSchema>;
export type GroupName = z.infer<typeof GroupNameSchema>;
