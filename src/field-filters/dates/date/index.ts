import { GroupNameSchema, OperatorOptionsSchema } from "../../";
import { z } from "zod";
import { DateFilterByOptionsSchema } from "..";

export const DateFieldFilterSchema = z.object({
  date: z.date(),
  filterBy: DateFilterByOptionsSchema,
  operator: OperatorOptionsSchema.optional(),
  groups: z.array(GroupNameSchema).optional(),
});

export type DateFieldFilter = z.infer<typeof DateFieldFilterSchema>;
