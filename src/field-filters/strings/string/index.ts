import { GroupNameSchema, OperatorOptionsSchema } from "../../";
import { z } from "zod";
import { StringFilterByOptionsSchema } from "../";

export const StringFieldFilterSchema = z.object({
  string: z.union([z.string(), z.array(z.string())]),
  filterBy: StringFilterByOptionsSchema,
  operator: OperatorOptionsSchema.optional(),
  groups: z.array(GroupNameSchema).optional(),
});

export type StringFieldFilter = z.infer<typeof StringFieldFilterSchema>;
