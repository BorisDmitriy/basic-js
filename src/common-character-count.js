const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;

  s1.split("").forEach((s1Elem) => {
    if (s2.includes(s1Elem)) {
      s2 = s2.slice(0, s2.indexOf(s1Elem)) + s2.slice(s2.indexOf(s1Elem) + 1);
      count += 1;
    }
  });
  return count;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount,
};
