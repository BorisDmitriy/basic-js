const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let countChar = 1;
  let encodeL = "";

  if (typeof str != "string" || str.length === 0) {
    return encodeL;
  }

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] == str[i - 1]) {
      countChar++;
    } else {
      if (countChar != 1) {
        encodeL += countChar + str[i - 1];
        countChar = 1;
      } else {
        encodeL += str[i - 1];
      }
    }
  }
  if (countChar != 1) {
    encodeL += countChar + str[str.length - 1];
  } else {
    encodeL += str[str.length - 1];
  }
  return encodeL;
}

module.exports = {
  encodeLine,
};
