"use server";
import { config } from "../../../config";
import { APIError, NetworkError, ValidationError, NotFoundError, UnauthorizedError, handleError } from "./errorHandler";

const API_KEY = config.apiKey || "";
const BASE_URL = config.baseUrl || "";
const HEADERS = { accept: "application/json", "x-cg-demo-api-key": API_KEY };

/**
 * FETCH API
 * @param {string} endpoint
 * @param {Record<string, string | number | boolean | undefined>} params
 * @returns {Promise<T>}
 * @throws {APIError, NetworkError, ValidationError, NotFoundError, UnauthorizedError, Error}
 */
export async function fetchApi<T>(endpoint: string, params?: Record<string, string | number | boolean | undefined>): Promise<T> {
  try {
    if (!endpoint) throw new ValidationError("L'endpoint est requis");

    const url = buildApiUrl(endpoint, params);
    const res = await fetch(url, {
      method: "GET",
      headers: HEADERS,
    });

    if (!res.ok) {
      let errorMessage = "Erreur API";

      try {
        const error = await res.json();
        errorMessage = error?.status?.error_message || error?.error?.status?.error_message || "Erreur API";
      } catch (jsonError) {
        console.warn("Échec de l'analyse de la réponse d'erreur", jsonError);
      }

      switch (res.status) {
        case 404:
          throw new NotFoundError(errorMessage);
        case 401:
          throw new UnauthorizedError(errorMessage);
        default:
          throw new APIError(errorMessage, res.status);
      }
    }

    // Vérification avant d'appeler `res.json()`
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await res.json() as T;
      if (typeof data === 'object' && data !== null && Object.keys(data).length === 0) {
        throw new APIError("Réponse vide", res.status);
      }
      return data;
    }

    throw new APIError("Réponse JSON invalide", res.status);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Erreur réseau :", error);
      throw new NetworkError("Erreur réseau");
    }

    handleError(error);
    throw error; // Relancer après le traitement de l'erreur
  }
}

const buildApiUrl = <T extends Record<string, string | number | boolean | undefined>>(endpoint: string, params?: Partial<T>) => {
  if (!params || Object.keys(params).length === 0) return `${BASE_URL}${endpoint}`;

  const queryParams = new URLSearchParams(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)]),
  ).toString();

  return `${BASE_URL}${endpoint}?${queryParams}`;
};
