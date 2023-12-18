const { NotImplementedError } = require('../extensions/index.js');

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
  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const separator = options.separator !== undefined ? options.separator : '+';
  const addition = options.addition !== undefined ? options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  let resStr = '';
  let resAdd = '';

  for (let i = 1; i <= additionRepeatTimes; i += 1) resAdd += addition + ((i < additionRepeatTimes) ? additionSeparator : '');
  for (let i = 1; i <= repeatTimes; i += 1) resStr += str + resAdd + ((i < repeatTimes) ? separator : '');

  return resStr;
}

module.exports = {
  repeater
};
