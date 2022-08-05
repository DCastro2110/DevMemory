import { items } from "../data/items";

export const randomNum = (): number => {
  return Math.floor(Math.random() * (items.length * 2));
};
