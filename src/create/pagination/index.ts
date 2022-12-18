import { Pagination as IPagination, PaginationSchema } from "../../schemas";

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

    return this;
  }

  run() {
    const validated = PaginationSchema.safeParse(this.pagination);

    if (validated.success) return validated.data;
    else return validated;
  }
}
