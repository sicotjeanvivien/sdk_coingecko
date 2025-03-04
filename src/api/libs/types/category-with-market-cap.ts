export interface CategoryWithMarketCap {
  id: string;
  name: string;
  market_cap: number;
  market_cap_change_24h: number;
  content: string;
  top_3_coins_id: [
    string,
    string,
    string
  ];
  top_3_coins: [
    string,
    string,
    string
  ];
  volume_24h: number;
  updated_at: string;
}