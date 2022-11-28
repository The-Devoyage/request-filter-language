import { z } from "zod";
import { StringFilterByOptionsSchema } from "..";
import {
  ArrayFilterByOptionsSchema,
  GroupNameSchema,
  OperatorOptionsSchema,
} from "../../";

export const StringArrayFieldFilterSchema = z.object({
  strings: z.array(z.string()),
  filterBy: StringFilterByOptionsSchema,
  operator: OperatorOptionsSchema.optional(),
  groups: z.array(GroupNameSchema).optional(),
  arrayOptions: ArrayFilterByOptionsSchema,
});

export type StringArrayFieldFilter = z.infer<
  typeof StringArrayFieldFilterSchema
>;
