import { Pagination as IPagination } from "../../schemas";

export class Pagination {
  pagination: IPagination | undefined;

  constructor() {
    this.pagination = undefined;
  }

  limit(limit: number) {
    this.pagination = {
      ...this.pagination,
      limit,
    };

    return this;
  }

  reverse(reverse: boolean) {
    this.pagination = {
      ...this.pagination,
      reverse,
    };

    return this;
  }

  dateKey(dateKey: string) {
    this.pagination = {
      ...this.pagination,
      date_key: dateKey,
    };
  }
}
