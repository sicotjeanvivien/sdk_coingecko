export interface DerivativeTicker {
  market: string;
  symbol: string;
  index_id: string;
  price: string;
  price_percentage_change_24h: number;
  contract_type: string;
  index: number;
  basis: number;
  spread: number;
  funding_rate: number;
  open_interest: number;
  volume_24h: number;
  last_traded_at: number;
  expired_at: string | null;
}