import {
  IntFieldFilter as IIntFieldFilter,
  IntFilterByOptions,
} from "../../schemas";
import { FieldFilter } from "../field-filter";

export class IntFieldFilter extends FieldFilter<
  IIntFieldFilter,
  IntFilterByOptions
> {
  constructor(int: number) {
    super();
    this.fieldFilter = { int };
  }
}
