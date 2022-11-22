const preorder = require("./n-ary-tree-preorder-589.js");

test("list the nodes children in correct order", () => {
  expect(preorder([1, null, 3, 2, 4, null, 5, 6])).toEqual([1, 3, 5, 6, 2, 4]);
  expect(
    preorder([
      1,
      null,
      2,
      3,
      4,
      5,
      null,
      null,
      6,
      7,
      null,
      8,
      null,
      9,
      10,
      null,
      null,
      11,
      null,
      12,
      null,
      13,
      null,
      null,
      14,
    ])
  ).toEqual([1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10]);
});
