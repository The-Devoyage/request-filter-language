import {
  HistoryFilterInput,
  HistoryFilterIntervalEnum,
  HistoryFilterInputSchema,
} from "../../schemas";

export class History {
  history: HistoryFilterInput | undefined;

  constructor() {
    this.history = undefined;
  }

  interval(interval: HistoryFilterIntervalEnum) {
    this.history = {
      ...this.history,
      interval: [...(this.history?.interval ?? []), interval],
    } as HistoryFilterInput;

    return this;
  }

  intervalKey(intervalKey: string) {
    this.history = {
      ...this.history,
      interval_key: intervalKey,
    } as HistoryFilterInput;

    return this;
  }

  run() {
    const validated = HistoryFilterInputSchema.safeParse(this.history);

    if (validated.success) return validated.data;
    else return validated;
  }
}
