const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],

  getLength() {
    console.log(this.result.length);
  },
  addLink(value) {
    this.result.push(`( ${value!== undefined ? value : ' '} )`);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.result.length) {
      const resultLeft = [...this.result];
      const resultRight = [...this.result];
      const resultConcat = [].concat(resultLeft.slice(0, position - 1), resultRight.slice(position));
      this.result = [...resultConcat]
    } else {
      this.result = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const showResult = [...this.result];
    this.result = [];
    return showResult.join('~~');
  }
};

module.exports = {
  chainMaker
};
