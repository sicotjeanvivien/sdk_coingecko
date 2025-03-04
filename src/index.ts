import {
  getAssetPlatforms
} from "./api/asset-platforms";
import {
  getCategories,
  getCategoriesWithMarketData

} from "./api/categories";
import {
  getCoinList,
  getCoinMarketList,
  getCoinDataById,
  getCoinTickersById,
  getCoinHistoricalDataById,
  getCoinHistoricalChartDataById,
  getCoinHistoricalChartDataRangeById,
  getCoinOhlcChartDataById
} from "./api/coins";
import {
  getCompagniesPublicTreasury
} from "./api/companies";
import {
  getCoinData,
  getCoinChartData,
  getCoinChartDataWithinTimeRange
} from "./api/contract";
import {
  getDerivativesTickers,
  getDerivativesExchanges,
  getDrerivativesExchangeById,
  getDerivativesExchangesList
} from "./api/derivatives";
import {
  getExchangeRates

} from "./api/exchange-rates";
import {
  getExchangesWithData,
  getExchangesList,
  getExchangesId,
  getExchangesTickersId,
  getExchangesVolumeChart
} from "./api/exchanges";
import {
  getCryptoGlobal,
  getDefiGlobal
} from "./api/global";
import {
  getNFTs,
  getNFTById,
  getNFTByContractAddress
} from "./api/nft";
import {
  getPing
} from "./api/ping";
import {
  search
} from "./api/search";
import {
  getCoinPriceByIds,
  getCoinPriceByTokenAddress,
  getSupportedCurrencies
} from "./api/simple";
import {
  getTrendingSearchList
} from "./api/trending";

export const SDK={
  getAssetPlatforms,
  getCategories,
  getCategoriesWithMarketData,
  getCoinList,
  getCoinMarketList,
  getCoinDataById,
  getCoinTickersById,
  getCoinHistoricalDataById,
  getCoinHistoricalChartDataById,
  getCoinHistoricalChartDataRangeById,
  getCoinOhlcChartDataById,
  getCompagniesPublicTreasury,
  getCoinData,
  getCoinChartData,
  getCoinChartDataWithinTimeRange,
  getDerivativesTickers,
  getDerivativesExchanges,
  getDrerivativesExchangeById,
  getDerivativesExchangesList,
  getExchangeRates,
  getExchangesWithData,
  getExchangesList,
  getExchangesId,
  getExchangesTickersId,
  getExchangesVolumeChart,
  getCryptoGlobal,
  getDefiGlobal,
  getNFTs,
  getNFTById,
  getNFTByContractAddress,
  getPing,
  search,
  getCoinPriceByIds,
  getCoinPriceByTokenAddress,
  getSupportedCurrencies,
  getTrendingSearchList
}

export default SDK;