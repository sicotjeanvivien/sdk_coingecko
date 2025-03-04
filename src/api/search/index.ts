import { fetchApi } from "../libs/fetchApi";
import { GetSearchParams } from "./paramsTypes";
import { SearchResponse } from "./responseTypes";

/**
 * SEARCH QUERIES : /search
 * @link https://docs.coingecko.com/v3.0.1/reference/search-data
 * @param {GetSearchParams} params
 * @returns {Promise<SearchResponse>}
 * @example
 * Search({ query: 'bitcoin' });
 */
export async function search(params: GetSearchParams): Promise<SearchResponse> {
  return await fetchApi<SearchResponse>("/search", params);
}