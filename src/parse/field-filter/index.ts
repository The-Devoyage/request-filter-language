import { FieldFilter, FieldFiltersSchema } from "../../field-filters";

export const parseFieldFilter = (
  object: unknown,
  location: string[]
):
  | {
      fieldFilter: FieldFilter | undefined;
      location: string;
    }
  | undefined => {
  const deepFilterSearch = (object: unknown): FieldFilter | undefined => {
    // If Valid Field Filter, Return, no need to update location.
    if (FieldFiltersSchema.safeParse(object).success) {
      return object as FieldFilter;
    }

    // If not FieldFilter, keep looking deeper, and update location.
    for (const k in object as Record<string, unknown>) {
      location.push(k);
      const obj = (object as Record<string, unknown>)[k];
      if (typeof obj === "object") {
        return deepFilterSearch(obj as Record<string, unknown>);
      }
    }
    return;
  };

  let fieldFilter: FieldFilter | undefined;

  if (typeof object === "object") {
    fieldFilter = deepFilterSearch(object);
  }

  return { fieldFilter, location: location.join(".") };
};