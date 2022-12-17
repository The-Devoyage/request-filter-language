import { z } from "zod";

export const PaginationSchema = z.object({
  limit: z.number().optional(),
  reverse: z.boolean().optional(),
  date_cursor: z.date().optional(),
  date_key: z.string().optional(),
});

export type Pagination = z.infer<typeof PaginationSchema>;
