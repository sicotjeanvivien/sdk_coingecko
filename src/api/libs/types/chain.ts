import * as Type from '.';

export interface Chain {
  id: string;
  chain_identifier: number | null; 
  name: string;
  shortname: string;
  native_coin_id: string;
  image: Type.Image;
}