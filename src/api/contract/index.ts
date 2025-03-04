import { fetchApi } from "../libs/fetchApi";
import {
  GetCoinDataParams,
  GetCoinChartDataParams,
  GetChartDataWithinTimeRangeParams
} from "./paramsTypes";
import {
  GetCurrentDataForCoin,
  GetHistoricalMarketData
} from "./responseTypes";

/**
 * COIN DATA BY TOKEN ADDRESS: /coins/{id}/contract/{contract_address}
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-contract-address
 * @param {GetCoinDataParams} params
 * @returns {Promise<GetCurrentDataForCoin>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinData({ id: "ethereum", contract_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" })
 */
export async function getCoinData(params: GetCoinDataParams): Promise<GetCurrentDataForCoin> {
  const { id, contract_address } = params;
  return await fetchApi<GetCurrentDataForCoin>(`/coins/${id}/contract/${contract_address}`);
}

/**
 * COIN HISTIRICAL CHART DATA BY TOKEN ADDRESS: /coins/{id}/contract/{contract_address}/market_chart
 * @link https://docs.coingecko.com/v3.0.1/reference/contract-address-market-chart
 * @param {GetCoinChartDataParams} params
 * @returns {Promise<GetHistoricalMarketData>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinChartData({ id: "ethereum", contract_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", vs_currency: "usd", days: 1 })
 */
export async function getCoinChartData(params: GetCoinChartDataParams): Promise<GetHistoricalMarketData> {
  const { id, contract_address } = params;
  return await fetchApi<GetHistoricalMarketData>(`/coins/${id}/contract/${contract_address}/market_chart`, params);
}

/**
 * COIN HISTORICAL CHART DATA WITHIN TIME RANGE BY TOKEN ADDRESS: /coins/{id}/contract/{contract_address}/market_chart/range
 * @link https://docs.coingecko.com/v3.0.1/reference/contract-address-market-chart-range
 * @param {GetChartDataWithinTimeRangeParams} params
 * @returns {Promise<GetHistoricalMarketData>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinChartDataWithinTimeRange({ id: "ethereum", contract_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", vs_currency: "usd", from: 1711929600, to: 1712275200 })
 */
export async function getCoinChartDataWithinTimeRange(params: GetChartDataWithinTimeRangeParams): Promise<GetHistoricalMarketData> {
  const { id, contract_address } = params;
  return await fetchApi<GetHistoricalMarketData>(`/coins/${id}/contract/${contract_address}/market_chart/range`, params);
}