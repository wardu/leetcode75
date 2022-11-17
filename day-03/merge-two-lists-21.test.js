const mergeTwoLists = require("./merge-two-lists-21.js");

test("mergeTwoLists", () => {
  expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4]);
  expect(mergeTwoLists([1, 3, 4], [1, 2, 4])).toEqual([1, 1, 2, 3, 4, 4]);
  expect(mergeTwoLists([], [])).toEqual([]);
  expect(mergeTwoLists([], [0])).toEqual([0]);
});
