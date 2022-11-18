const middleNode = require("./middle-of-linked-list-876.js");

test("make middle of linked list, new head", () => {
  expect(middleNode([1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
  expect(middleNode([1, 2, 3, 4, 5, 6])).toEqual([4, 5, 6]);
});
