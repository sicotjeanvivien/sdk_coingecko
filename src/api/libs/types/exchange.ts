export interface Exchange {
  name: string; // Exchange name
  year_established: number; // Year the exchange was established
  country: string; // Country of the exchange
  description: string; // Exchange description
  url: string; // Exchange website URL
  image: string; // Exchange image URL
  has_trading_incentive: boolean; // Indicates if the exchange has trading incentives
  trust_score: number; // Trust score of the exchange
  trust_score_rank: number; // Rank based on trust score
  trade_volume_24h_btc: number; // Trade volume in BTC in the last 24 hours
  trade_volume_24h_btc_normalized: number; // Normalized trade volume in BTC in 24 hours
}