import * as Type from ".";
export interface NftData extends Type.Nft {
  image: Type.NftImage;
  banner_image: string;
  description: string;
  native_currency: string;
  native_currency_symbol: string;
  market_cap_rank: number;
  floor_price: {
    native_currency: number;
    usd: number;
  };
  market_cap: {
    native_currency: number;
    usd: number;
  };
  volume_24h: {
    native_currency: number;
    usd: number;
  };
  floor_price_in_usd_24h_percentage_change: number;
  floor_price_24h_percentage_change: Type.FloorPriceChange;
  market_cap_24h_percentage_change: Type.FloorPriceChange;
  volume_24h_percentage_change: Type.FloorPriceChange;
  one_day_sales_24h_percentage_change: number;
  one_day_average_sale_price: number;
  one_day_average_sale_price_24h_percentage_change: number;
  number_of_unique_addresses: number;
  number_of_unique_addresses_24h_percentage_change: number;
  volume_in_usd_24h_percentage_change: number;
  total_supply: number;
  one_day_sales: number;
  ath_change_percentage: {
    native_currency: number;
    usd: number;
  };
  ath_date: {
    native_currency: string;
    usd: string;
  };
  links: {
    homepage: string;
    twitter: string;
    discord: string;
  };
  floor_price_7d_percentage_change: Type.FloorPriceChange;
  floor_price_14d_percentage_change: Type.FloorPriceChange;
  floor_price_30d_percentage_change: Type.FloorPriceChange;
  floor_price_60d_percentage_change: Type.FloorPriceChange;
  floor_price_1y_percentage_change: Type.FloorPriceChange;
  explorers: Explorer[];
  user_favorites_count: number;
  ath:  {
    native_currency: number;
    usd: number;
  };
}

interface Explorer {
  name: string;
  link: string;
}