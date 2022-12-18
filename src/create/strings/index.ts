import {
  StringFilterByOptions,
  StringFieldFilter as IStringFieldFilter,
  StringArrayFieldFilter as IStringArrayFieldFilter,
  ArrayFilterByOptions,
} from "../../schemas";
import { FieldFilter } from "../";

export class StringFieldFilter extends FieldFilter<
  IStringFieldFilter,
  StringFilterByOptions
> {
  constructor(string: string) {
    super();
    this.fieldFilter = { string };
  }
}

export class StringArrayFieldFilter extends FieldFilter<
  IStringArrayFieldFilter,
  StringFilterByOptions
> {
  constructor(strings: string[]) {
    super();
    this.fieldFilter = { strings, arrayOptions: "IN" };
  }

  arrayOptions(arrayOptions: ArrayFilterByOptions) {
    this.fieldFilter = {
      ...this.fieldFilter,
      arrayOptions,
    } as IStringArrayFieldFilter;
  }
}
