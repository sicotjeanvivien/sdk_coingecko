import { fetchApi } from "../libs/fetchApi";
import { GetParams } from "./paramsTypes";
import { ListAllCategories, ListAllCategoriesWithMarketData } from "./responseTypes";


/**
 * COIN CATEGORIES LIST (ID Map): /coins/categories/list
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-categories-list
 * @returns {Promise<ListAllCategories>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCategories()
 */
export async function getCategories(): Promise<ListAllCategories> {
  return await fetchApi<ListAllCategories>("/coins/categories/list");
}

/**
 * COIN CATEGORIES LIST WITH MARKET DATA: /coins/categories
 * @link https://docs.coingecko.com/v3.0.1/reference/coins-categories
 * @param {GetParams} params
 * @returns {Promise<ListAllCategoriesWithMarketData>}
 * @throws {APIError, NetworkError, ValidationError, Error}
 * @example
 * getCategoriesWithMarketData({order: "market_cap_desc"})
 */
export async function getCategoriesWithMarketData(params: GetParams): Promise<ListAllCategoriesWithMarketData> {
  return await fetchApi<ListAllCategoriesWithMarketData>("/coins/categories", params);
}