const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = "";
  if (options.repeatTimes === undefined || !toString(options.repeatTimes))
    options.repeatTimes = 1;
  if (options.separator === undefined || !toString(options.separator))
    options.separator = "+";
  if (options.addition === undefined || !toString(options.addition))
    options.addition = "";

  if (options.additionRepeatTimes === undefined || !toString(options.additionRepeatTimes))
    options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined || !toString(options.additionSeparator))
    options.additionSeparator = "|";

  for (let i = 0; i < options.repeatTimes; i += 1) {
    newStr += str;

    for (let j = 0; j < options.additionRepeatTimes; j += 1) {
      newStr += options.addition;
      // minus one addition separator in the end
      if (j + 1 != options.additionRepeatTimes)
        newStr += options.additionSeparator;
    }

    //minus one separator in the end
    if (i + 1 != options.repeatTimes) newStr += options.separator;
  }

  return newStr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
