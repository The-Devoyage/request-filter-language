import {
  GroupNameSchema,
  OperatorOptionsSchema,
} from "../../../field-filters/common";
import { z } from "zod";
import { IntFilterByOptionsSchema } from "..";

export const IntFieldFilterSchema = z.object({
  int: z.number(),
  filterBy: z.optional(IntFilterByOptionsSchema),
  operator: z.optional(OperatorOptionsSchema),
  groups: z.optional(z.array(GroupNameSchema)),
});

export type IntFieldFilter = z.infer<typeof IntFieldFilterSchema>;
