import { z } from "zod";

export const PaginationSchema = z
  .object({
    limit: z.number().optional().nullable(),
    reverse: z.boolean().optional().nullable(),
    date_cursor: z.date().optional().nullable(),
    date_key: z.string().optional().nullable(),
  })
  .nullable();

export type Pagination = z.infer<typeof PaginationSchema>;
