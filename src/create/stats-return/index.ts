import { HistoricStats, Stats, StatsSchema } from "../../schemas";

export class StatsReturn {
  stats: Stats | null = null;

  constructor() {
    this.stats = null;
  }

  cursor(cursor: Date) {
    this.stats = {
      ...this.stats,
      cursor,
    };

    return this;
  }

  page(page: number) {
    this.stats = {
      ...this.stats,
      page,
    };

    return this;
  }

  remaining(remaining: number) {
    this.stats = {
      ...this.stats,
      remaining,
    };

    return this;
  }

  total(total: number) {
    this.stats = {
      ...this.stats,
      total,
    };

    return this;
  }

  history(historicStats: HistoricStats) {
    this.stats = {
      ...this.stats,
      history: [...(this.stats?.history ?? []), historicStats],
    };

    return this;
  }

  run() {
    const validated = StatsSchema.safeParse(this.stats);

    if (validated.success) return validated.data;
    else return validated;
  }
}
