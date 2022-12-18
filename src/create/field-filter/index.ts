import {
  FieldFilter as IFieldFilter,
  FilterByOptions,
  GroupName,
  OperatorOptions,
  FieldFilterSchema,
} from "../../schemas";

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
    const validated = FieldFilterSchema.safeParse(this.fieldFilter);

    if (validated.success) return validated.data;
    else return validated;
  }
}
