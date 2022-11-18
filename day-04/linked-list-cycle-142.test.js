const detectCycle = require("./linked-list-cycle-142.js");

test("give position of internal link", () => {
  expect(detectCycle([3, 2, 0, -4])).toEqual(1);
  expect(detectCycle([1, 2])).toEqual(0);
  expect(detectCycle([1])).toEqual(-1);
  expect(detectCycle([])).toEqual(-1);
});
