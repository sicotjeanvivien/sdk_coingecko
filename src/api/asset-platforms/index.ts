import { fetchApi } from "../libs/fetchApi";
import { GetParams } from "./paramsTypes";
import { ListAllAssetPlatforms } from "./responseTypes";


/**
* ASSET PLATFORMS LIST (ID Map): /asset_platforms
* @link https://docs.coingecko.com/v3.0.1/reference/asset-platforms-list
* @param {GetParams} params
* @returns {Promise<AssetPlatformsResponse[]>}
* @throws {APIError, NetworkError, ValidationError, Error}
* @example
* getAssetPlatforms({ filter: "nft" })
 */
export async function getAssetPlatforms(params: GetParams): Promise<ListAllAssetPlatforms> {
  return await fetchApi<ListAllAssetPlatforms>("/asset_platforms", params);
}