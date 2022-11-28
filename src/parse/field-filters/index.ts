import { FieldFilter, FieldFiltersSchema } from "../../field-filters";
import { parseFieldFilter } from "../field-filter";

export const parseFieldFilters = (
  object: unknown,
  rootLocation: string
): {
  fieldFilter: FieldFilter;
  location: string;
}[] => {
  let fieldFilters: { fieldFilter: FieldFilter; location: string }[] = [];

  if (FieldFiltersSchema.safeParse(object).success) {
    fieldFilters.push({
      fieldFilter: object as FieldFilter,
      location: rootLocation,
    });
    return fieldFilters;
  }

  if (Array.isArray(object)) {
    for (const ff in object) {
      const parsedArrayFilters = parseFieldFilters(object[ff], rootLocation);
      fieldFilters = [...fieldFilters, ...parsedArrayFilters];
    }
    return fieldFilters;
  }

  if (typeof object === "object" && object !== null && !Array.isArray(object)) {
    for (const property in object) {
      const objectProperty = (object as Record<string, unknown>)[property];

      if (
        typeof objectProperty === "object" &&
        objectProperty !== null &&
        Array.isArray(objectProperty)
      ) {
        for (const i of objectProperty) {
          const parsedArrayFilters = parseFieldFilters(
            i,
            [rootLocation, property].join(".")
          );

          fieldFilters = [...fieldFilters, ...parsedArrayFilters];
          continue;
        }
      } else if (
        typeof objectProperty === "object" &&
        objectProperty !== null &&
        !Array.isArray(objectProperty)
      ) {
        const parsed = parseFieldFilter(objectProperty, [
          rootLocation,
          property,
        ]);

        if (parsed && !!parsed.fieldFilter) {
          fieldFilters.push(
            parsed as { fieldFilter: FieldFilter; location: string }
          );
        } else if (!parsed && typeof object === "object") {
          const nestedParsed = parseFieldFilters(
            object,
            [rootLocation, property].join(".")
          );
          for (const nestedFilter of nestedParsed) {
            fieldFilters.push(nestedFilter);
          }
        }
      }
    }
  }

  return fieldFilters;
};
