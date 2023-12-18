const { NotImplementedError } = require('../extensions/index.js');

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
  let obj = {};
  domains.forEach(domain => {
    let domainsParts = domain.split('.').reverse();
    console.log(domainsParts)
    let resDns = '';
    domainsParts.forEach(part => {
      resDns += '.' + part;
      if (!obj[resDns]) obj[resDns] = 1;
      else obj[resDns] = obj[resDns] + 1;
    })
  });
  return obj;
}

module.exports = {
  getDNSStats
};
