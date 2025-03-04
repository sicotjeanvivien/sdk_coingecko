import { fetchApi } from "../libs/fetchApi";
import {
  GetNFTsParams,
  GetNFTByIdParams,
  GetNFTByContractAddressParams
} from "./paramsTypes";
import {
  ListAllNFTsCategories,
  GetNFTsData
} from "./responseTypes";

/**
 * NFTS LIST (ID MAP) : /nfts/list
 * @link https://docs.coingecko.com/v3.0.1/reference/nfts-list
 * @param {GetNFTsParams} params
 * @returns {Promise<ListAllNFTsCategories>}
 * @example
 * GetNFTs({ order: 'market_cap_desc', per_page: 10, page: 1 });
 */
export async function getNFTs(params: GetNFTsParams): Promise<ListAllNFTsCategories> {
  return await fetchApi<ListAllNFTsCategories>("/nfts/list", params);
}

/**
 * NFTS COLLECTION DATA BY ID : /nfts/{id}
 * @link https://docs.coingecko.com/v3.0.1/reference/nfts-id
 * @param {GetNFTByIdParams} params
 * @returns {Promise<GetNFTsData>}
 * @example
 * GetNFTById({ id: 'pudgy-penguins' });
 */
export async function getNFTById(params: GetNFTByIdParams): Promise<GetNFTsData> {
  const { id } = params;
  return await fetchApi<GetNFTsData>(`/nfts/${id}`);
}

/**
 * NFTS COLLECTION DATA BY CONTRACT ADDRESS : /nfts/{asset_platform_id}/contract/{contract_address}
 * @link https://docs.coingecko.com/v3.0.1/reference/nfts-contract-address
 * @param {GetNFTByContractAddressParams} params
 * @returns {Promise<GetNFTsData>}
 * @example
 * GetNFTByContractAddress({ asset_platform_id: 'ethereum', contract_address: '0x7be80764ea72d34c771382ab260e3f7cd4d1e431' });
 */
export async function getNFTByContractAddress(params: GetNFTByContractAddressParams): Promise<GetNFTsData> {
  const { asset_platform_id, contract_address } = params;
  return await fetchApi<GetNFTsData>(`/nfts/${asset_platform_id}/contract/${contract_address}`);
}
