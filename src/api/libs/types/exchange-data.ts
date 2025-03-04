import * as Type from '.';

export interface ExchangeData extends Type.Exchange {
  coins: number; // Number of coins listed on the exchange
  pairs: number; // Number of trading pairs on the exchange
  tickers: Type.Ticker[];
}