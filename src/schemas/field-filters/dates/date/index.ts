import {
  GroupNameSchema,
  OperatorOptionsSchema,
} from "../../../field-filters/common";
import { z } from "zod";
import { DateFilterByOptionsSchema } from "..";

export const DateFieldFilterSchema = z.object({
  date: z.date(),
  filterBy: z.optional(DateFilterByOptionsSchema),
  operator: z.optional(OperatorOptionsSchema),
  groups: z.optional(z.array(GroupNameSchema)),
});

export type DateFieldFilter = z.infer<typeof DateFieldFilterSchema>;
