import { z } from "zod";

export const HistoricStatsIdSchema = z.object({
  YEAR: z.optional(z.number()).nullable(),
  DAY_OF_YEAR: z.optional(z.number()).nullable(),
  MONTH: z.optional(z.number()).nullable(),
  DAY_OF_MONTH: z.optional(z.number()).nullable(),
  WEEK: z.optional(z.number()).nullable(),
  DAY_OF_WEEK: z.optional(z.number()).nullable(),
  HOUR: z.optional(z.number()).nullable(),
  MINUTE: z.optional(z.number()).nullable(),
  SECOND: z.optional(z.number()).nullable(),
});

export const HistoricStatsSchema = z.object({
  _id: z.optional(HistoricStatsIdSchema).nullable(),
  total: z.optional(z.number()).nullable(),
});

export const StatsSchema = z.object({
  remaining: z.optional(z.number()).nullable(),
  total: z.optional(z.number()).nullable(),
  page: z.optional(z.number()).nullable(),
  cursor: z.optional(z.coerce.date()).nullable(),
  history: z.optional(z.array(HistoricStatsSchema)).nullable(),
  per_page: z.optional(z.number()).nullable(),
  prev_cursor: z.optional(z.coerce.date()).nullable(),
});

export type HistoricStatsId = z.infer<typeof HistoricStatsIdSchema>;
export type HistoricStats = z.infer<typeof HistoricStatsSchema>;
export type Stats = z.infer<typeof StatsSchema>;
