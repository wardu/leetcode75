const isSubsequence = require("./is-subsequence-392.js");

test("isSubsequence", () => {
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  expect(isSubsequence("axc", "ahbgdc")).toBe(false);
});
