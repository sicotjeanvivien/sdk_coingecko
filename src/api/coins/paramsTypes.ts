export interface GetCoinListParams extends Record<string, any>{
  include_platform?: boolean;
}

export interface GetCoinListWithMarketDataParams extends Record<string, any> {
  vs_currency: string;
  ids?: string;
  category?: string;
  order?: string;
  per_page?: number;
  page?: number;
  sparkline?: boolean;
  price_change_percentage?: string;
  locale?: string;
  precision?: string;
}

export interface GetCoinByIdParams extends Record<string, any> {
  id: string;
  localization?: boolean;
  tickers?: boolean;
  market_data?: boolean;
  community_data?: boolean;
  developer_data?: boolean;
  sparkline?: boolean;
}

export interface GetCoinTrickerByIdParams extends Record<string, any> {
  id: string;
}

export interface GetCoinHistoricalParams extends Record<string, any> {
  id: string;
  date: string;
  localization?: boolean;
}

export interface GetCoinHistoricalChartDataParams extends Record<string, any> {
  id: string;
  vs_currency: string;
  days: string;
  interval?: string;
  precision?: string;
}

export interface GetCoinHistoricalChartDataWithinTimeRangeParams extends Record<string, any> {
  id: string;
  vs_currency: string;
  from: number;
  to: number;
  precision?: string;
}

export interface GetCoinOHLCParams extends Record<string, any> {
  id: string;
  vs_currency: string;
  days: number;
  precision?: string;
}