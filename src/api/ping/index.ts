import { fetchApi } from "../libs/fetchApi";
/**
 * CHECK API SERVER STATUS: /ping
 * @link https://docs.coingecko.com/v3.0.1/reference/ping-server
 * @returns {Promise<Response>}
 */
export async function getPing(): Promise<Response> {
  return await fetchApi<Response>("/ping");
}

type Response = {
  gecko_says: string;
}