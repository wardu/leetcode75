/**
 *
 *
 *
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving
 * the order of characters. No two characters may map to the same character, but a character
 * may map to itself.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 *
 */
const isIsomorphic = (s, t) => {
  let map = new Map();
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    char1 = s.charAt(i);
    char2 = t.charAt(i);

    if (map.has(char1) == true) {
      if (map.get(char1) !== char2) return false;
    } else {
      if (set.has(char2)) {
        return false;
      }
      map.set(char1, char2);
      set.add(char2);
    }
  }
  return true;
};

module.exports = isIsomorphic;
