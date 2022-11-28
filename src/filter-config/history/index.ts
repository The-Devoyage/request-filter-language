import { z } from "zod";

export const HistoryFilterIntervalEnumSchema = z.enum([
  "YEAR",
  "DAY_OF_YEAR",
  "MONTH",
  "DAY_OF_MONTH",
  "WEEK",
  "DAY_OF_WEEK",
  "HOUR",
  "MINUTES",
  "SECONDS",
  "MILLISECONDS",
]);

export const HistoryFilterInputSchema = z.object({
  interval: z.array(HistoryFilterIntervalEnumSchema),
});

export type HistoryFilterIntervalEnum = z.infer<
  typeof HistoryFilterIntervalEnumSchema
>;
export type HistoryFilterInput = z.infer<typeof HistoryFilterInputSchema>;
