const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  alphabetTable = [];

  getTable() {
    for (let i = 0; i < this.alphabet.length; i += 1) {
      let leftAlphabet = this.alphabet.slice(i);
      let rightAlphabet = this.alphabet.slice(0, i);
      let strAlphabet = leftAlphabet + rightAlphabet;
      this.alphabetTable.push(strAlphabet.split(''));
    }
  }

  encrypt(message, word) {
    console.log(this.alphabetTable)
  }
  decrypt() {
  
  }
}

module.exports = {
  VigenereCipheringMachine
};
