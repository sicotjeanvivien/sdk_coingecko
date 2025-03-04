import * as Type from '.';

export interface CompagniesTreasury {
  total_holdings: number;
  total_value_usd: number;
  market_cap_dominance: number;
  companies: Type.Compagny[];
}
