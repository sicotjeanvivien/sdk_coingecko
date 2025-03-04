import { fetchApi } from "../libs/fetchApi";
import { ListRates } from "./responseTypes";

/**
 * BTC-TO-CURRENCY EXCHANGE RATES : /exchange_rates
 * @link https://api.coingecko.com/api/v3/exchange_rates
 * @returns {Promise<ListRates>}
 * @example
 * getExchangeRates()
 */
export async function getExchangeRates(): Promise<ListRates> {
  return await fetchApi<ListRates>("/exchange_rates");
}