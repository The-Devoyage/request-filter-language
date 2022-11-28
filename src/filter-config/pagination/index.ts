import { z } from "zod";

export const PaginationSchema = z.object({
  limit: z.number().optional(),
  reverse: z.boolean().optional(),
  createdAt: z.date().optional(),
});

export type Pagination = z.infer<typeof PaginationSchema>;
