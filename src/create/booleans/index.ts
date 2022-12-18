import {
  BooleanFieldFilter as IBooleanFieldFilter,
  BooleanFilterByOptions,
} from "../../schemas";
import { FieldFilter } from "../";

export class BooleanFieldFilter extends FieldFilter<
  IBooleanFieldFilter,
  BooleanFilterByOptions
> {
  constructor(bool: boolean) {
    super();
    this.fieldFilter = { bool };
  }
}
