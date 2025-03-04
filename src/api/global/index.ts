import { fetchApi } from "../libs/fetchApi";
import {
  GetCryptoGlobalData,
  GetCyptoCurrencyGlobalDefiData
} from "./responseType";

/**
 * CRYPTO-GLOBAL MARKET DATA : /global
 * @link https://docs.coingecko.com/v3.0.1/reference/crypto-global
 * @returns {Promise<GetCryptoGlobalData>}
 * @example
 * getCryptoGlobal()
 */
export async function getCryptoGlobal(): Promise<GetCryptoGlobalData> {
  return await fetchApi<GetCryptoGlobalData>("/global");
}

/**
 * GLOBAL DE-FI MARKET DATA : /global/decentralized_finance_defi
 * @link https://docs.coingecko.com/v3.0.1/reference/global-defi
 * @returns {Promise<GetCyptoCurrencyGlobalDefiData>}
 * @example
 * getDefiGlobal()
 */
export async function getDefiGlobal(): Promise<GetCyptoCurrencyGlobalDefiData> {
  return await fetchApi<GetCyptoCurrencyGlobalDefiData>("/global/decentralized_finance_defi");
}