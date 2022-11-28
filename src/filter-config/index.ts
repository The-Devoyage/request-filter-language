import { z } from "zod";
import { HistoryFilterInputSchema } from "./history";
import { PaginationSchema } from "./pagination";

export const FilterConfigSchema = z.object({
  pagination: PaginationSchema,
  history: HistoryFilterInputSchema,
});

export type FilterConfig = z.infer<typeof FilterConfigSchema>;
