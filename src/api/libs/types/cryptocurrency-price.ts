type Currency = 'usd' | "eur" | "rub" | string;

export interface CryptocurrencyPrice {
  [key: string]: {
    [key: `${Currency}`]: number;
    [key: `${Currency}_market_cap`]: number;
    [key: `${Currency}_24h_vol`]: number;
    [key: `${Currency}_24h_change`]: number;
    last_updated_at: number;
  };
}