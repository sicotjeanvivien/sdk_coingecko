export interface GetDerivativesExchangesParams extends Record<string, string | number | boolean | undefined>{
  order?: string;
  per_page?: number;
  page?: number;
}

export interface GetDerivativesExchangesByIdParams extends Record<string, string | number | boolean | undefined>{
  id: string;
  index_tickers?: string;
}
