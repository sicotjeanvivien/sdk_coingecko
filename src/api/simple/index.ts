import { fetchApi } from "../libs/fetchApi";
import {
  GetCryptoPriceByIdsParams,
  GetCryptoPriceByTokenAddressParams
} from "./paramsTypes";
import { PricesOfCryptoCurrency } from "./responseTypes";

/**
 * COIN PRICE BY IDS: /simple/price by ids
 * @link https://docs.coingecko.com/v3.0.1/reference/simple-price
 * @param {priceByIdsParams} params
 * @returns {Promise<PricesOfCryptoCurrency>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinPrice({ ids: "bitcoin", vs_currencies: "usd" })
 * getCoinPrice({ ids: "bitcoin,ethereum", vs_currencies: "usd" })
 */
export async function getCoinPriceByIds(params: GetCryptoPriceByIdsParams): Promise<PricesOfCryptoCurrency> {
  return await fetchApi<PricesOfCryptoCurrency>("/simple/price", params);
}

/**
 * COIN PRICE BY TOKEN ADDRESS: /simple/token_price/{id} by token address
 * @link https://docs.coingecko.com/v3.0.1/reference/simple-token-price
 * @param {SimplenPriceParams} params
 * @returns {Promise<PricesOfCryptoCurrency>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCoinPriceByTokenAddress({ id: "ethereum", vs_currencies: "usd", contract_addresses: "0x0d8775f648430679a709e98d2b0cb6250d2887ef" })
 */
export async function getCoinPriceByTokenAddress(params: GetCryptoPriceByTokenAddressParams): Promise<PricesOfCryptoCurrency> {
  const { id } = params;
  return await fetchApi<PricesOfCryptoCurrency>(`/simple/token_price/${id}`, params);
}

/**
 * SUPPORTED CURRENCIES LIST: /simple/supported_vs_currencies
 * @link https://docs.coingecko.com/v3.0.1/reference/simple-supported-currencies
 * @returns {Promise<string[]>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 */
export async function getSupportedCurrencies(): Promise<string[]> {
  return await fetchApi<string[]>("/simple/supported_vs_currencies");
}