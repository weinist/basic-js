const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  if(!Array.isArray(arr) || (arr.length <= 1)) {
    throw new Error('Error');
  }

  arr.forEach(el => {
    if(typeof(el) !== 'number') {
      switch (el) {
        case '--discard-next':
          if(arr.indexOf(el) != 0) {
            
          }
        break;
        case '--discard-prev':
          if(result.indexOf(el) !== 0) {
            result.splice(result.indexOf(el) - 1, 2);
          }
          result.splice(result.indexOf(el), 1);
        break;
        case '--double-next':
          result.splice(result.indexOf(el), 1, result[result.indexOf(el) + 1]);
        break;
        case '--double-prev':
          result.splice(result.indexOf(el), 1, result[result.indexOf(el) - 1]);
        break;
        default:
          return arr;
      }
    }
  });
   return result;
};
