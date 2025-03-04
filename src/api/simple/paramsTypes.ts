export interface GetCryptoPriceByIdsParams extends SimpleParams {
  ids: string;
}

export interface GetCryptoPriceByTokenAddressParams extends SimpleParams {
  id: string;
  contract_addresses: string;
}

interface SimpleParams extends Record<string, any> {
  vs_currencies: string,
  include_market_cap?: boolean,
  include_24hr_vol?: boolean,
  include_24hr_change?: boolean,
  include_last_updated_at?: boolean,
  precision?: string,
}
