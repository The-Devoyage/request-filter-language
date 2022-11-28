import { gql } from "apollo-server-core";

export const History = gql`
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
    MILLISECONDS
  }

  input HistoryFilterInput {
    interval: [HistoryFilterIntervalEnum!]!
  }
`;
