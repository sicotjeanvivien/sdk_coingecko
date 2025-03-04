import * as Type from '.';

export interface CoinWithMarketData extends Type.Coin {
  current_price?: number;
  total_value_locked?: number | null;
  mcap_to_tvl_ratio?: number | null;
  fdv_to_tvl_ratio?: number | null;
  roi?: number | null;
  ath?: number;
  image?: string;
  ath_change_percentage?: number;
  ath_date?: string;
  atl?: number;
  atl_change_percentage?: number;
  atl_date?: string;
  market_cap?: number;
  market_cap_rank?: number | null;
  fully_diluted_valuation?: number;
  market_cap_fdv_ratio?: number | null;
  total_volume?: number;
  high_24h?: number;
  low_24h?: number;
  price_change_24h?: number | null;
  price_change_percentage_24h?: number | null;
  price_change_percentage_7d?: number | null;
  price_change_percentage_14d?: number | null;
  price_change_percentage_30d?: number | null;
  price_change_percentage_60d?: number | null;
  price_change_percentage_200d?: number | null;
  price_change_percentage_1y?: number | null;
  market_cap_change_24h?: number | null;
  market_cap_change_percentage_24h?: number | null;
  price_change_24h_in_currency?: number;
  price_change_percentage_1h_in_currency?: number;
  price_change_percentage_24h_in_currency?: number;
  price_change_percentage_7d_in_currency?: number;
  price_change_percentage_14d_in_currency?: number;
  price_change_percentage_30d_in_currency?: number;
  price_change_percentage_60d_in_currency?: number;
  price_change_percentage_200d_in_currency?: number;
  price_change_percentage_1y_in_currency?: number;
  market_cap_change_24h_in_currency?: number;
  market_cap_change_percentage_24h_in_currency?: number;
  total_supply?: number | null;
  max_supply?: number | null;
  circulating_supply?: number | null;
  last_updated?: string | null
}