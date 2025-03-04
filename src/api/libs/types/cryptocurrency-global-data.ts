import * as Type from '.';

export type CryptocurrencyGlobalData = {
  active_cryptocurrencies: number;
  upcoming_icos: number;
  ongoing_icos: number;
  ended_icos: number;
  markets: number;
  total_market_cap: Type.TotalMarketCap;
  total_volume: Type.TotalVolume;
  market_cap_percentage: Type.MarketCapPercentage;
  market_cap_change_percentage_24h_usd: number;
  updated_at: number;
}