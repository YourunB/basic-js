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

  constructor(nonReverseMessage = true) {
      this.nonReverseMessage = nonReverseMessage;
    }

  getTable() {
    for (let i = 0; i < this.alphabet.length; i += 1) {
      this.alphabetTable.push((this.alphabet.slice(i) + this.alphabet.slice(0, i)).split(''));
    }
  }

  encrypt(message, word) {
    if (message && word) {

      let tempUndefined = [];
      const messageReserve = message.toUpperCase();
      for (let i = 0; i < messageReserve.length; i += 1) {
        if (this.alphabet.indexOf(messageReserve[i]) === -1) tempUndefined.push([i, messageReserve[i]]); // [index, char]
      }

      message = message.toUpperCase().replace(/\s/g, "");
      word = word.toUpperCase().replace(/\s/g, "");

      while (word.length < message.length) word = word + word;
      word = word.slice(0, message.length)

      this.getTable();

      let cipherMessage = '';
      for (let i = 0; i < message.length; i += 1) {
        if (this.alphabet.indexOf(message[i]) !== -1) cipherMessage += this.alphabetTable[this.alphabet.indexOf(message[i])][this.alphabet.indexOf(word[i])];
      }

      for (let i = 0; i < tempUndefined.length; i += 1) {
        cipherMessage = cipherMessage.slice(0, tempUndefined[i][0]) + tempUndefined[i][1] + cipherMessage.slice(tempUndefined[i][0], cipherMessage.length + 1)
      }

      return (this.nonReverseMessage === true) ? cipherMessage.trim() : cipherMessage.trim().split('').reverse().join('');
    } else throw new Error('Incorrect arguments!');
  }

  decrypt(message, word) {
    if (message && word) {

      let tempUndefined = [];
      const messageReserve = message.toUpperCase();
      for (let i = 0; i < messageReserve.length; i += 1) {
        if (this.alphabet.indexOf(messageReserve[i]) === -1) tempUndefined.push([i, messageReserve[i]]); // [index, char]
      }

      message = message.toUpperCase().replace(/\s/g, "");
      word = word.toUpperCase().replace(/\s/g, "");

      while (word.length < message.length) word = word + word;
      word = word.slice(0, message.length)

      this.getTable();

      let cipherMessage = '';
      for (let i = 0; i < message.length; i += 1) {
        if (this.alphabet.indexOf(message[i]) !== -1) cipherMessage += this.alphabet[this.alphabetTable[this.alphabet.indexOf(word[i])].indexOf(message[i])];
      }

      for (let i = 0; i < tempUndefined.length; i += 1) {
        cipherMessage = cipherMessage.slice(0, tempUndefined[i][0]) + tempUndefined[i][1] + cipherMessage.slice(tempUndefined[i][0], cipherMessage.length + 1)
      }

      return (this.nonReverseMessage === true) ? cipherMessage.trim() : cipherMessage.trim().split('').reverse().join('');
    } else throw new Error('Incorrect arguments!');
  }
}

module.exports = {
  VigenereCipheringMachine
};
