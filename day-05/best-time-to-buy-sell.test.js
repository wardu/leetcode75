const maxProfit = require("./best-time-to-buy-sell-121.js");

test("returns max-profit from time-series", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});
