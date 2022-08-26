import { randomNum } from "./randomNum";
import { timerFormator } from "./timerFormator";

it("should return a integer less than or equal the double of quant informated", () => {
  let result1 = randomNum(10);
  let result2 = randomNum(45);

  expect(result1).toBeLessThan(20);
  expect(result2).toBeLessThan(45);
});

it("should transform secons in hours formate", () => {
  let seconds1 = 3400;
  let seconds2 = 2435;
  let seconds3 = 3600;

  expect(timerFormator(seconds1)).toBe("56:40");
  expect(timerFormator(seconds2)).toBe("40:35");
  expect(timerFormator(seconds3)).toBe("00:00");
});

export {};
