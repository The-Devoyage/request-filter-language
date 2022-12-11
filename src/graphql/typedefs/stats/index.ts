export const Stats = `
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

  type HistoricStats {
    _id: HistoricStatsId 
    total: Int 
  }

  type Stats {
    remaining: Int 
    total: Int 
    page: Int 
    cursor: DateTime 
    history: [HistoricStats!] 
  }
`;
