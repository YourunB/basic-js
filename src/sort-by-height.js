const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrFilter = arr.filter(n => n !== -1).sort((n1, n2) => n1 - n2);
  const arrResult = arr.map(n => {
    if (n !== -1) {
      n = arrFilter[0];
      arrFilter.shift();
      return n;
    } else return -1;
  });
  return arrResult;
}

module.exports = {
  sortByHeight
};
