const HistoricStats = `
  type HistoricStats {
    _id: HistoricStatsId 
    total: Int 
  }
`;

const HistoricStatsId = `
  type HistoricStatsId {
    YEAR: Int 
    DAY_OF_YEAR: Int 
    MONTH: Int 
    DAY_OF_MONTH: Int 
    WEEK: Int 
    DAY_OF_WEEK: Int 
    HOUR: Int 
    MINUTE: Int 
    SECOND: Int 
  }
`;

const Stats = `
  type Stats {
    remaining: Int 
    total: Int 
    page: Int 
    prev_cursor: DateTime
    cursor: DateTime 
    history: [HistoricStats!] 
    per_page: Int
  }
`;

export { Stats, HistoricStatsId, HistoricStats };
