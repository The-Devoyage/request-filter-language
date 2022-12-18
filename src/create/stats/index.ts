import { HistoricStats, Stats as IStats, StatsSchema } from "src/schemas";

export class Stats {
  stats: IStats | null = null;

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
    return StatsSchema.parse(this.stats);
  }
}
