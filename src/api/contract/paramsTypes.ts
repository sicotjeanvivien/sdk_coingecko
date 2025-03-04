export interface GetCoinDataParams extends Record<string, string | number | boolean | undefined> {
  id: string;
  contract_address: string;
}

export interface GetCoinChartDataParams extends Record<string, string | number | boolean | undefined> {
  id: string;
  contract_address: string;
  vs_currency: string;
  days: number;
  interval?: string;
  precision?: number;
}

export interface GetChartDataWithinTimeRangeParams extends Record<string, string | number | boolean | undefined> {
  id: string;
  contract_address: string;
  vs_currency: string;
  from: number;
  to: number;
  precision?: number;
} 