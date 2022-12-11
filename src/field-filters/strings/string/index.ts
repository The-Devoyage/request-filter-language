import {
  GroupNameSchema,
  OperatorOptionsSchema,
} from "../../../field-filters/common";
import { z } from "zod";
import { StringFilterByOptionsSchema } from "../";

export const StringFieldFilterSchema = z.object({
  string: z.union([z.string(), z.array(z.string())]),
  filterBy: z.optional(StringFilterByOptionsSchema),
  operator: z.optional(OperatorOptionsSchema),
  groups: z.optional(z.array(GroupNameSchema)),
});

export type StringFieldFilter = z.infer<typeof StringFieldFilterSchema>;
