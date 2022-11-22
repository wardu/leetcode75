/**
 *
 * Given a string s which consists of lowercase or uppercase letters, return the length of the
 * longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 *
 *
 *
 *
 *
 *
 * @param {string} string
 * @return {number}
 *
 *
 */
const longestPalindrome = (string) => {
  let count = 0;
  let palindrome = new Set();

  for (let i = 0; i < string.length; i++) {
    if (palindrome.has(string[i])) {
      count += 2;
      palindrome.delete(string[i]);
    } else {
      palindrome.add(string[i]);
    }
  }
  if (palindrome.size > 0) {
    count++;
  }
  return count;
};

module.exports = longestPalindrome;
