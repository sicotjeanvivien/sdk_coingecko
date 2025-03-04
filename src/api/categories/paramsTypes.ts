export interface GetParams extends Record<string, any> {
  order?: "market_cap_desc" | "market_cap_asc" | "neme_asc" | "name_desc" | "market_cap_change_24h_desc" | "market_cap_change_24h_asc";
}