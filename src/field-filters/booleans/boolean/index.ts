import { GroupNameSchema, OperatorOptionsSchema } from "../../";
import { z } from "zod";
import { BooleanFilterByOptionsSchema } from "../";

export const BooleanFieldFilterSchema = z.object({
  bool: z.boolean(),
  filterBy: BooleanFilterByOptionsSchema,
  operator: OperatorOptionsSchema.optional(),
  groups: z.array(GroupNameSchema).optional(),
});

export type BooleanFieldFilter = z.infer<typeof BooleanFieldFilterSchema>;
