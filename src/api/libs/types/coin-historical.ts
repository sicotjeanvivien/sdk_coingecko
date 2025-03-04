import * as Type from '.';

export interface CoinHistorical extends Type.Coin {
  localization: Type.Localization;
  image: Type.Image;
  market_data: Type.ChartData;
  community_data: Type.CommunityData;
  developer_data: Type.DeveloperData;
  public_interest_stats: Type.PublicInterestStat;
}