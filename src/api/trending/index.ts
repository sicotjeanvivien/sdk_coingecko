import { fetchApi } from "../libs/fetchApi";
import { TrendingSearchResponse } from "./responseTypes";

/**
 * TRENDING SEARCH LIST : /search/trending
 * @link https://docs.coingecko.com/v3.0.1/reference/trending-search
 * @returns {Promise<TrendingSearchResponse>}
 * @example
 * getTrendingSearchList()
 */
export async function getTrendingSearchList(): Promise<TrendingSearchResponse> {
  return await fetchApi<TrendingSearchResponse>("/search/trending");
}