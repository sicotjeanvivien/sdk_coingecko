export interface DerivativeExchange {
  name: string; // Exchange name
  open_interest_btc: number; // Open interest in BTC
  trade_volume_24h_btc: string; // Trade volume in BTC in 24 hours
  number_of_perpetual_pairs: number; // Number of perpetual pairs
  number_of_futures_pairs: number; // Number of futures pairs
  image: string; // Exchange image URL
  year_established: number | null; // Year established
  country: string | null; // Country of incorporation
  description: string; // Exchange description
  url: string; // Exchange website URL
}