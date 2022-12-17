import {
  GroupNameSchema,
  OperatorOptionsSchema,
} from "../../../field-filters/common";
import { z } from "zod";
import { BooleanFilterByOptionsSchema } from "../";

export const BooleanFieldFilterSchema = z.object({
  bool: z.boolean(),
  filterBy: z.optional(BooleanFilterByOptionsSchema),
  operator: z.optional(OperatorOptionsSchema),
  groups: z.optional(z.array(GroupNameSchema)),
});

export type BooleanFieldFilter = z.infer<typeof BooleanFieldFilterSchema>;
