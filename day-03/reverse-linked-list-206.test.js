const reverseList = require("./reverse-linked-list-206.js");

test("Reverse a link list of numbers", () => {
  expect(reverseList([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});
