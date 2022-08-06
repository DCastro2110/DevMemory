import { items } from "../data/items";

export const randomNum = (quant: number): number => {
  return Math.floor(Math.random() * (quant * 2));
};
