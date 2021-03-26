const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

constructor(type) {
  this.type = type;
}

encrypt(message, key) {

if((!message) || (!key)) {
  throw new Error()
}
  
  message = message.toUpperCase();
  let keyCode = key.toUpperCase();
  let res = '';

  keyCode = keyCode.repeat(Math.ceil(message.length / key.length)).split('');

  for(let i = 0; i < message.length; i++) {
    if((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) < 91)) {
      res += String.fromCharCode(((message.charCodeAt(i) + keyCode[0].charCodeAt(0)) % 26) + 65);
      keyCode.shift();
    } else {
        res += message.charAt(i);
      }
    }
  if(this.type === false) {
    return res.split('').reverse().join('');
    } else {
        return res;
      }
}  

decrypt(message, key) {

if((!message) || (!key)) {
  throw new Error()
}

  message = message.toUpperCase();
  let keyCode = key.toUpperCase();
  let res = '';

  keyCode = keyCode.repeat(Math.ceil(message.length / key.length)).split('');

  for(let i = 0; i < message.length; i++) {
    if((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) < 91)) {
      res += String.fromCharCode(((message.charCodeAt(i) + 26 - keyCode[0].charCodeAt(0)) % 26) + 65);
      keyCode.shift();
    } else {
        res += message.charAt(i);
      }
    }
  if(this.type === false) {
    return res.split('').reverse().join('');
  } else {
      return res;
    }
  }
}

module.exports = VigenereCipheringMachine;
