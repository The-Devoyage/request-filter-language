import {
  DateFieldFilter as IDateFieldFilter,
  DateFilterByOptions,
} from "../../schemas";
import { FieldFilter } from "../field-filter";

export class DateFieldFilter extends FieldFilter<
  IDateFieldFilter,
  DateFilterByOptions
> {
  constructor(date: Date) {
    super();
    this.fieldFilter = { date };
  }
}
