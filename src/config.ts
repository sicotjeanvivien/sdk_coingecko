// src/config.ts (ou config.js)
import dotenv from "dotenv";

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

const apiKey = process.env.COINGECKO_API_KEY;

if (!apiKey) {
  throw new Error('API_KEY is not defined in environment variables');
}

export const config = {
  apiKey,
  baseUrl: process.env.COINGECKO_API_BASE_URL || "https://api.coingecko.com/api/v3",
};
