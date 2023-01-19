import { z } from "zod";
import { HistoryFilterInputSchema } from "./history";
import { PaginationSchema } from "./pagination";

export const FilterConfigSchema = z.object({
  pagination: z.optional(PaginationSchema),
  history: z.optional(HistoryFilterInputSchema),
});

export type FilterConfig = z.infer<typeof FilterConfigSchema>;

export * from "./history";
export * from "./pagination";
