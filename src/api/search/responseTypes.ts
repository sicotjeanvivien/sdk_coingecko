/**
 * List of coins, categories and markets matching search term ordered by market cap
 */
export type  SearchResponse =  { 
  coins: Coin[];
  exchanges: Exchange[];
  categories: Category[];
  nfts: Nft[];
  icos: string[];
}

interface Exchange {
  id: string;
  name: string;
  market_type: string;
  thumb: string;
  large: string;
}

interface Category {
  id: string;
  name: string;
}

interface Nft {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
}

interface Coin {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}
