import { fetchApi } from "../libs/fetchApi";
import {
  GetExchangesParams,
  GetExchangesListParams,
  GetExchangesIdParams,
  GetExchangesTikersIdParams,
  GetExchangesVolumeChartParams
} from "./paramsTypes";
import {
  ListAllExchanges,
  ListAllExchangesWithIdName,
  GetExchangesVolumeChart,
  GetExchangeTickers,
  GetExchangesVolumeChartData
} from "./responseTypes";

/**
 * EXCHANGES LIST WITH DATA: /exchanges
 * @link https://docs.coingecko.com/v3.0.1/reference/exchanges
 * @param {GetExchangesParams} params
 * @returns {Promise<ListAllExchanges>}
 * @example
 * getExchangesWithData({ per_page: 10, page: 1 });
 */
export async function getExchangesWithData(params: GetExchangesParams): Promise<ListAllExchanges> {
  return fetchApi<ListAllExchanges>("/exchanges", params);
}

/**
 * EXCHANGES LIST (ID MAP): /exchanges/list
 * @link https://docs.coingecko.com/v3.0.1/reference/exchanges-list
 * @param {GetExchangesListParams} params
 * @returns {Promise<ListAllExchangesWithIdName>}
 * @example
 * getExchangesList({ status: "active" });
 */
export async function getExchangesList(params: GetExchangesListParams): Promise<ListAllExchangesWithIdName> {
  return fetchApi<ListAllExchangesWithIdName>("/exchanges/list", params);
}

/**
 * EXCHANGES LIST BY ID: /exchanges/{id}
 * @link https://docs.coingecko.com/v3.0.1/reference/exchanges-id
 * @param {GetExchangesIdParams} params
 * @returns {Promise<GetExchangesVolumeChart>}
 * @example
 * getExchangesId({ id: "binance" });
 */
export async function getExchangesId(params: GetExchangesIdParams): Promise<GetExchangesVolumeChart> {
  const { id } = params;
  return fetchApi<GetExchangesVolumeChart>(`/exchanges/${id}`);
}

/**
 * EXCHANGES TICKERS BY ID: /exchanges/{id}/tickers
 * @link https://docs.coingecko.com/v3.0.1/reference/exchanges-id-tickers
 * @param {GetExchangesTikersIdParams} params
 * @returns {Promise<GetExchangeTickers>}
 * @example
 * getExchangesTickersId({ id: "binance", coin_ids: "bitcoin" });
 */
export async function getExchangesTickersId(params: GetExchangesTikersIdParams): Promise<GetExchangeTickers> {
  const { id } = params;
  return await fetchApi<GetExchangeTickers>(`/exchanges/${id}/tickers`, params);
}

/**
 * EXCHANGES VOLUME CHART BY ID: /exchanges/{id}/volume_chart
 * @link https://docs.coingecko.com/v3.0.1/reference/exchanges-id-volume-chart
 * @param {GetExchangesVolumeChartData} params
 * @returns {Promise<EschangeVolumeChartResponse>}
 * @example
 * getExchangesVolumeChart({ id: "binance", days: 1 });
 */
export async function getExchangesVolumeChart(params: GetExchangesVolumeChartParams): Promise<GetExchangesVolumeChartData> {
  const { id } = params;
  return await fetchApi<GetExchangesVolumeChartData>(`/exchanges/${id}/volume_chart`, params);
}