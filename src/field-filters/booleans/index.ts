import { z } from "zod";

export const BooleanFilterByOptionsSchema = z.enum(["EQ", "NE"]);

export type BooleanFilterByOptions = z.infer<
  typeof BooleanFilterByOptionsSchema
>;

export * from "./boolean";
