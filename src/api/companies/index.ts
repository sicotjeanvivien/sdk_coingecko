import { fetchApi } from "../libs/fetchApi";
import { GetParams } from "./paramsTypes";
import { GetPublicCompaniesTreasuryData } from "./responseTypes";

/**
 * PUBLIC COMPANIES HOLDINGS : /companies/public_treasury/{coin_id}
 * @link https://docs.coingecko.com/v3.0.1/reference/companies-public-treasury
 * @param {GetParams} params
 * @returns {Promise<GetPublicCompaniesTreasuryData>}
 * @throws {NetworkError, ValidationError, Error}
 * @example
 * getCompagniesPublicTreasury({coin_id: 'bitcoin'})
 */
export async function getCompagniesPublicTreasury(params: GetParams): Promise<GetPublicCompaniesTreasuryData> {
  const { coin_id } = params;
  return await fetchApi<GetPublicCompaniesTreasuryData>(`/companies/public_treasury/${coin_id}`);
}
