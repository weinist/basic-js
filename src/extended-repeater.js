const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let res = [];
  let result = [];
  if(!options) {
    return false;
  }

  if(!String(str)) {
    str = String(str);
  }

  if(str == null) {
    str = 'null';
  }

  if(!String(options.addition)) {
    options.addition = String(options.addition);
  }

  if(options.addition === null) {
    options.addition = 'null';
  }

  if(!options.separator) {
    options.separator = '+';
  }
  
  if(!String(options.separator)) {
    options.separator = String(options.separator);
  }

  if(!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  for(let i = 0; i < options.additionRepeatTimes - 1; i++) {
    res.push(options.addition);
    res.push(options.additionSeparator);
  }
    res.push(options.addition);
    res.push(str);
    str = res.reverse().join('');
  
  for(let k = 0; k < options.repeatTimes - 1; k++) {
    result.push(str);
    result.push(options.separator);
  }
    result.push(str);
    return result.join('');
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here





};