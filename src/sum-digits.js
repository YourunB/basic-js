const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numbers = String(n).split('');

  getResultSum()
  function getResultSum() {
    numbers = numbers.map(number => Number(number));
    numbers = numbers.reduce((result, number) => result + number);
    if (numbers >= 10) {
      numbers = String(numbers).split('');
      getResultSum();
    } else return numbers;
  }

  return numbers;
}

module.exports = {
  getSumOfDigits
};
