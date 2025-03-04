import * as Type from "../libs/types";

/**
 * List all exchanges
 */
export type ListAllExchanges = (Type.Exchange | {id: string})[];

/**
 * List all exchanges with ID and name
 */
export type ListAllExchangesWithIdName = {id: string, name: string}[];

/**
 * Get exchange volume in BTC and top 100 tickers only
 */
export type GetExchangesVolumeChart = Type.ExchangeData;

/**
 * Get exchange tickers
 */
export type GetExchangeTickers = Type.ExchangeTicker;

/**
 * Get exchange volume chart data
 */
export type GetExchangesVolumeChartData = [number, string][];
