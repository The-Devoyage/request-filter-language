import {
  GroupNameSchema,
  OperatorOptionsSchema,
  ArrayFilterByOptionsSchema,
} from "../../../field-filters/common";
import { z } from "zod";
import { StringFilterByOptionsSchema } from "..";

export const StringArrayFieldFilterSchema = z.object({
  strings: z.array(z.string()),
  filterBy: z.optional(StringFilterByOptionsSchema),
  operator: z.optional(OperatorOptionsSchema),
  groups: z.optional(z.array(GroupNameSchema)),
  arrayOptions: ArrayFilterByOptionsSchema,
});

export type StringArrayFieldFilter = z.infer<
  typeof StringArrayFieldFilterSchema
>;
