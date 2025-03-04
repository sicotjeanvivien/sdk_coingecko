export interface Ticker {
  base: string; // Coin ticker base currency
  target: string; // Coin ticker target currency
  market: Market; // Coin ticker exchange
  last: number; // Last traded price
  volume: number; // Traded volume
  cost_to_move_up_usd: number; // Cost to move up in USD
  cost_to_move_down_usd: number; // Cost to move down in USD
  converted_last: ConvertedLast; // Converted last price in various currencies
  converted_volume: ConvertedVolume; // Converted volume in various currencies
  trust_score: string; // Trust score
  bid_ask_spread_percentage: number; // Bid-ask spread percentage
  timestamp: string; // Timestamp of the ticker
  last_traded_at: string; // Last traded timestamp
  last_fetch_at: string; // Last fetch timestamp
  is_anomaly: boolean; // Indicates if the ticker is an anomaly
  is_stale: boolean; // Indicates if the ticker is stale
  trade_url: string; // Trade URL
  token_info_url: string | null; // Token info URL
  coin_id: string; // Base currency coin ID
  target_coin_id: string; // Target currency coin ID
}

interface ConvertedLast {
  [currency: string]: number; // Converted last price in various currencies
}

interface ConvertedVolume {
  [currency: string]: number; // Converted volume in various currencies
}

interface Market {
  name: string; // Exchange name
  identifier: string;
  has_trading_incentive: boolean;
  logo: string;
}