const longestPalindrome = require("./longest-palindrome-409.js");

test("finds the longest palindrome", () => {
  expect(longestPalindrome("abccccdd")).toEqual(7);
  expect(longestPalindrome("a")).toEqual(1);
  expect(longestPalindrome("bb")).toEqual(2);
});
