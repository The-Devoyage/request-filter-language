export const History = `
  enum HistoryFilterIntervalEnum {
    YEAR
    DAY_OF_YEAR
    MONTH
    DAY_OF_MONTH
    WEEK
    DAY_OF_WEEK
    HOUR
    MINUTES
    SECONDS
  }

  input HistoryFilterInput {
    interval: [HistoryFilterIntervalEnum!]!
    interval_key: String!
  }
`;
