export interface GetNFTsParams extends Record<string, string | number | boolean | undefined> {
  order: string;
  per_page: number;
  page: number;
}

export interface GetNFTByIdParams extends Record<string, string | number | boolean | undefined> {
  id: string;
}

export interface GetNFTByContractAddressParams extends Record<string, string | number | boolean | undefined> {
  asset_platform_id: string;
  contract_address: string;
}
