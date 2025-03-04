import * as Type from "../libs/types";

/**
 * List all derivative tickers
 */
export type ListAllDerivativeTickers = Type.DerivativeTicker[];

/**
 * List all derivative exchanges
 */
export type ListAllDerivativesExchanges = (Type.DerivativeExchange | { id: string })[];

/**
 * Get derivative exchange data
 */
export type GetDeravativeExchangeData = Type.DerivativeExchange | { tickers: Type.DerivativeTicker[] };

/**
 * List all derivative exchanges name and identifier
 */
export type ListAllDerivativesExchangesIdentifier = { id: string, name: string }[];
