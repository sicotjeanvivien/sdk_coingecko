import * as Type from '.';

export interface ExchangeTicker extends Type.Exchange {
  name: string; // Coin name
  tickers: Type.Ticker[];
}