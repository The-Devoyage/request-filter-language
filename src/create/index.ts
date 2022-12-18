import {
  FieldFilter as IFieldFilter,
  FilterByOptions,
  GroupName,
  OperatorOptions,
  FieldFilterSchema,
} from "../schemas";
import { StringFieldFilter, StringArrayFieldFilter } from "./strings";
import { IntFieldFilter } from "./ints";
import { DateFieldFilter } from "./dates";
import { BooleanFieldFilter } from "./booleans";

export class FieldFilter<K extends IFieldFilter, T extends FilterByOptions> {
  fieldFilter: K | undefined;

  constructor() {
    this.fieldFilter = undefined;
  }

  filterBy(filterByOption: T) {
    this.fieldFilter = {
      ...this.fieldFilter,
      filterBy: filterByOption,
    } as K;

    return this;
  }

  groups(groups: GroupName[]) {
    this.fieldFilter = {
      ...this.fieldFilter,
      groups,
    } as K;

    return this;
  }

  operator(operator: OperatorOptions) {
    this.fieldFilter = {
      ...this.fieldFilter,
      operator,
    } as K;

    return this;
  }

  run() {
    return FieldFilterSchema.parse(this.fieldFilter) as K;
  }
}

export const fieldFilter = {
  string: StringFieldFilter,
  int: IntFieldFilter,
  date: DateFieldFilter,
  strings: StringArrayFieldFilter,
  bool: BooleanFieldFilter,
};

const sff = new fieldFilter.string("nick")
  .filterBy("MATCH")
  .operator("OR")
  .run();
