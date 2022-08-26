import { randomNum } from "./randomNum";
import { timerFormator } from './timerFormator'

it('should return a integer less than or equal the double of quant informated', () => {
  let result = randomNum(10);

  expect(result).toBeLessThanOrEqual(20);
})

it("should transform secons in hours formate", () => {
  let seconds1 = 3400;
  let seconds2 =  2435;

  expect(timerFormator(seconds1)).toBe("56:40");
  expect(timerFormator(seconds2)).toBe("40:35");

})

export {};