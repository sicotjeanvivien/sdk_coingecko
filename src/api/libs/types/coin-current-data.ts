import * as Types from ".";

export interface CoinCurrentData extends Types.Coin {
  id: string;
  web_slug?: string | null;
  asset_platform_id?: string | null;
  platforms?: Types.Platform | null;
  detail_platforms?: Types.DetailPlatform | null;
  block_time_in_minutes?: number | null;
  hashing_algorithm?: string | null;
  categories?: string[];
  preview_listing?: boolean;
  public_notice?: string | null;
  additional_notices?: string[];
  localization?: Types.Localization | null;
  description?: Types.Description | null;
  links?: Types.Links | null;
  image?: Types.Image | null;
  country_origin?: string | null;
  genesis_date?: string | null;
  sentiment_votes_up_percentage?: number | null;
  sentiment_votes_down_percentage?: number | null;
  market_cap_rank?: number | null;
  market_data?: Types.CoinWithMarketData | null;
  community_data?: Types.CommunityData | null;
  developer_data?: Types.DeveloperData | null;
  status_update?: string[];
  last_updated?: string | null;
  tickers?: Types.Ticker[] | null;
}
