import { fetchApi } from "../libs/fetchApi";
import {
  GetDerivativesExchangesParams,
  GetDerivativesExchangesByIdParams
} from "./paramsTypes";
import {
  ListAllDerivativeTickers,
  ListAllDerivativesExchanges,
  GetDeravativeExchangeData,
  ListAllDerivativesExchangesIdentifier
} from "./responseTypes";

/**
 * DERIVATIVES TICKERS LISTS : /derivatives/tickers
 * @link https://docs.coingecko.com/v3.0.1/reference/derivatives-tickers
 * @returns {Promise<ListAllDerivativeTickers>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getDerivativesTickers()
 */
export async function getDerivativesTickers(): Promise<ListAllDerivativeTickers> {
  return await fetchApi<ListAllDerivativeTickers>("/derivatives/tickers");
}

/**
 * DERIVATIVES EXCHANGES LISTS WITH DATA : /derivatives/exchanges
 * @link https://docs.coingecko.com/v3.0.1/reference/derivatives-exchanges
 * @param {GetDerivativesExchangesParams} params
 * @returns {Promise<ListAllDerivativesExchanges>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getDerivativesExchanges({order: "name_asc", per_page: 100, page: 1})
 */
export async function getDerivativesExchanges(params: GetDerivativesExchangesParams): Promise<ListAllDerivativesExchanges> {
  return await fetchApi<ListAllDerivativesExchanges>("/derivatives/exchanges", params);
}

/**
 * DERIVATIVES EXCHANGES DATA BY ID : /derivatives/exchanges/{id}
 * @link https://docs.coingecko.com/v3.0.1/reference/derivatives-exchanges-id
 * @param {GetDerivativesExchangesByIdParams} params
 * @returns {Promise<GetDeravativeExchangeData>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getDrerivativesExchangeById({id: "binance_futures", index_tickers: "all"})
 */
export async function getDrerivativesExchangeById(params: GetDerivativesExchangesByIdParams): Promise<GetDeravativeExchangeData> {
  const { id } = params;
  return await fetchApi<GetDeravativeExchangeData>(`/derivatives/exchanges/${id}`, params);
}

/**
 * DERIVATIVES EXCHANGES LIST (ID MAP): /derivatives/exchanges/list
 * @link https://docs.coingecko.com/v3.0.1/reference/derivatives-exchanges-list
 * @returns {Promise<ListAllDerivativesExchangesIdentifier[]>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getDerivativesExchangesList()
 */
export async function getDerivativesExchangesList(): Promise<ListAllDerivativesExchangesIdentifier[]> {
  return await fetchApi<ListAllDerivativesExchangesIdentifier[]>("/derivatives/exchanges/list");
}