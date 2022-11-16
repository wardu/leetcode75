const isIsomorphic = require("./isomorphic-strings-205.js");

test("isIsomorphic", () => {
  expect(isIsomorphic("egg", "add")).toBe(true);
  expect(isIsomorphic("foo", "bar")).toBe(false);
  expect(isIsomorphic("paper", "title")).toBe(true);
  expect(isIsomorphic("ab", "aa")).toBe(false);
});
