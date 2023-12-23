const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsCountObj = {};

  domains.forEach((domainElem) => {
    domainElem = domainElem.split(".").reverse();

    let presentDomain = "";

    for (let i = 0; i < domainElem.length; i += 1) {
      presentDomain = presentDomain + "." + domainElem[i];

      if (domainsCountObj[presentDomain]) {
        domainsCountObj[presentDomain] += 1;
      } else {
        domainsCountObj[presentDomain] = 1;
      }
    }
  });

  return domainsCountObj;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats,
};
