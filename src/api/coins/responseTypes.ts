import * as Type from "../libs/types";

/**
 * List of all coins
 */
export type ListAllCoinWithIdNameSymbole = (Type.Coin | { platforms?: Type.Platform | undefined; })[];

/**
 * List of all coins with market data
 */
export type ListAllCoinWithMarketData = Type.CoinWithMarketData[];

/**
 * Get current data for a coin
 */
export type GetCurrentDataForCoin = Type.CoinCurrentData;

/**
 * Get coin tickers
 */
export type GetCoinTickers = Type.CoinTickers;

/**
 * Get historical data (name, price, market, stats) at a given date for a coin
 */
export type GetCoinHistoricalData = Type.CoinHistorical;

/**
 * Coin Historical Chart Data by ID
 * Get historical market data include price, market cap, and 24hr volume (granularity auto)
 */
export type GetHistoricalMarketData = Type.ChartData;

/**
 * Get coin's OHLC
 */
export type GetCoinOHLC = Type.OHLC;
