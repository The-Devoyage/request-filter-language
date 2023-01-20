import { z } from "zod";
import { HistoryFilterInputSchema } from "./history";
import { PaginationSchema } from "./pagination";

export const FilterConfigSchema = z
  .object({
    pagination: z.optional(PaginationSchema).nullable(),
    history: z.optional(HistoryFilterInputSchema).nullable(),
  })
  .nullable();

export type FilterConfig = z.infer<typeof FilterConfigSchema>;

export * from "./history";
export * from "./pagination";
