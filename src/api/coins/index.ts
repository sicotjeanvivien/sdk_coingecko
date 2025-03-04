import { fetchApi } from "../libs/fetchApi";
import {
  GetCoinListParams,
  GetCoinListWithMarketDataParams,
  GetCoinByIdParams,
  GetCoinTrickerByIdParams,
  GetCoinHistoricalParams,
  GetCoinHistoricalChartDataParams,
  GetCoinHistoricalChartDataWithinTimeRangeParams,
  GetCoinOHLCParams
} from "./paramsTypes";
import {
  ListAllCoinWithIdNameSymbole,
  ListAllCoinWithMarketData,
  GetCurrentDataForCoin,
  GetCoinTickers,
  GetCoinHistoricalData,
  GetHistoricalMarketData,
  GetCoinOHLC
} from "./responseTypes";

/**
 * COIN LIST (ID MAP): /coins/list
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-list
 * @param {GetCoinListParams} params
 * @returns {Promise<ListAllCoinWithIdNameSymbole>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinList({ include_platform: true })
 */
export async function getCoinList(params?: GetCoinListParams): Promise<ListAllCoinWithIdNameSymbole> {
  return await fetchApi<ListAllCoinWithIdNameSymbole>("/coins/list", params);
}

/**
 * COIN LIST WITH MARKET DATA: /coins/markets
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-markets
 * @param {GetCoinListWithMarketDataParams} params
 * @returns {Promise<ListAllCoinWithMarketData>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinMarketList({ vs_currency: "usd", ids: "bitcoin,ethereum" })
 * getCoinMarketList({ vs_currency: "usd", ids: "bitcoin,ethereum", order: "market_cap_desc", per_page: 10, page: 1 })
 */
export async function getCoinMarketList(params: GetCoinListWithMarketDataParams): Promise<ListAllCoinWithMarketData> {
  return await fetchApi<ListAllCoinWithMarketData>("/coins/markets", params);
}

/**
 * COIN DATA BY ID: /coins/{id}
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-id
 * @param {GetCoinByIdParams} params
 * @returns {Promise<GetCurrentDataForCoin>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinDataById({ id: "bitcoin" })
 * getCoinDataById({ id: "bitcoin", localization: false, tickers: false, market_data: false, community_data: false, developer_data: false, sparkline: false })
 */
export async function getCoinDataById(params: GetCoinByIdParams): Promise<GetCurrentDataForCoin> {
  const { id } = params;
  return await fetchApi<GetCurrentDataForCoin>(`/coins/${id}`, params);
}

/**
 * COIN TRICKER BY ID: /coins/{id}/tickers
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-id-tickers
 * @param {GetCoinTrickerByIdParams} params
 * @returns {Promise<GetCoinTickers>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinTickersById({ id: "bitcoin" })
 */
export async function getCoinTickersById(params: GetCoinTrickerByIdParams): Promise<GetCoinTickers> {
  const { id } = params;
  return await fetchApi<GetCoinTickers>(`/coins/${id}/tickers`, params);
}

/**
 * COIN HISTORICAL DATA BY ID: /coins/{id}/history
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-id-history
 * @param {GetCoinHistoricalParams} params
 * @returns {Promise<GetCoinHistoricalData>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinHistoricalDataById({ id: "bitcoin", date: "30-12-2021" })
 */
export async function getCoinHistoricalDataById(params: GetCoinHistoricalParams): Promise<GetCoinHistoricalData> {
  const { id } = params;
  return await fetchApi<GetCoinHistoricalData>(`/coins/${id}/history`, params);
}

/**
 * COIN HISTORICAL CHART DATA BY ID: /coins/{id}/market_chart
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-id-market-chart
 * @param {GetCoinHistoricalChartDataParams} params
 * @returns {Promise<GetHistoricalMarketData>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinHistoryChartDataById({ id: "bitcoin", vs_currency: "usd", days: "1", interval: "daily" })
 */
export async function getCoinHistoricalChartDataById(params: GetCoinHistoricalChartDataParams): Promise<GetHistoricalMarketData> {
  const { id } = params;
  return await fetchApi<GetHistoricalMarketData>(`/coins/${id}/market_chart`, params);
}

/**
 * COIN HISTORICAL CHART DATA WITHIN TIME RANGE BY ID: /coins/{id}/market_chart/range
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-id-market-chart-range
 * @param {GetCoinHistoricalChartDataWithiinTimeRangeParams} params
 * @returns {Promise<GetHistoricalMarketData>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinHistoricalChartDataRangeById({ id: "bitcoin", vs_currency: "usd", from: "1711929600", to: "1712275200" })
 */
export async function getCoinHistoricalChartDataRangeById(params: GetCoinHistoricalChartDataWithinTimeRangeParams): Promise<GetHistoricalMarketData> {
  const { id } = params;
  return await fetchApi<GetHistoricalMarketData>(`/coins/${id}/market_chart/range`, params);
}

/**
 * COIN OHLC CHART BY ID: /coins/{id}/ohlc
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-id-ohlc
 * @param {GetCoinOHLCParams} params
 * @returns {Promise<GetCoinOHLC>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinOhlcChartDataById({ id: "bitcoin", vs_currency: "usd", days: "1" })
 * getCoinOhlcChartDataById({ id: "bitcoin", vs_currency: "usd", days: "180", precision: "4" })
 */
export async function getCoinOhlcChartDataById(params: GetCoinOHLCParams): Promise<GetCoinOHLC> {
  const { id } = params;
  return await fetchApi<GetCoinOHLC>(`/coins/${id}/ohlc`, params);
}