import * as Type from "../libs/types";

/**
 * List rates
 */
export type ListRates = {
  rates: {
    [key: string]: Type.Rate;
  }
};
