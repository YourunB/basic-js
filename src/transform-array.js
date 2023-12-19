const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let res = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') res.push(arr[i]);
      if (arr[i] === '--double-next' && arr[i + 2] !== '--discard-prev' && arr[i + 1] !== undefined) res.push(arr[i + 1]);
      if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next' && arr[i - 1] !== undefined) res.push(arr[i - 1]);
      if (arr[i] === '--discard-next' && arr[i + 1] !== undefined) i += 1;
    }
    return res;
  } else throw new Error(`'arr' parameter must be an instance of the Array!`)
}

module.exports = {
  transform
};
