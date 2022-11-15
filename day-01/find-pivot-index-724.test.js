const pivotIndex = require("./find-pivot-index-724.js");

test("Gives the index of array where left and right sides are equal", () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  expect(pivotIndex([1, 2, 3])).toBe(-1);
  expect(pivotIndex([2, 1, -1])).toBe(0);
});
