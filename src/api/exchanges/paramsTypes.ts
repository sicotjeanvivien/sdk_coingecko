export interface GetExchangesParams extends Record<string, string | number | boolean | undefined> {
  per_page?: number;
  page?: number;
}

export interface GetExchangesListParams extends Record<string, string | number | boolean | undefined> {
  status?: string;
}

export interface GetExchangesIdParams extends Record<string, string | number | boolean | undefined> {
  id: string; // Exchange ID refers to /exchanges/list.
}

export interface GetExchangesTikersIdParams extends Record<string, string | number | boolean | undefined> {
  id: string; // Exchange ID refers to /exchanges/list.
  coin_ids: string; //filter tickers by coin_ids, comma-separated if querying more than 1 coin refers to /coins/list.
  include_exchange_logo: boolean; //include exchange logo, default: false
  page: number; //page through results
  depth: boolean; //include 2% orderbook depth (Example: cost_to_move_up_usd & cost_to_move_down_usd),default: false
  order: string; //use this to sort the order of responses, default: trust_score_desc
}

export interface GetExchangesVolumeChartParams extends Record<string, string | number | boolean | undefined> {
  id: string; // Exchange ID refers to /exchanges/list.
  days: number; // data up to number of days ago (1 for today)
}