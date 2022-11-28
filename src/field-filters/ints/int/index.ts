import { GroupNameSchema, OperatorOptionsSchema } from "../../";
import { z } from "zod";
import { IntFilterByOptionsSchema } from "..";

export const IntFieldFilterSchema = z.object({
  int: z.number(),
  filterBy: IntFilterByOptionsSchema,
  operator: OperatorOptionsSchema.optional(),
  groups: z.array(GroupNameSchema).optional(),
});

export type IntFieldFilter = z.infer<typeof IntFieldFilterSchema>;
