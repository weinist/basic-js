const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) {
      throw Error('Error');
    } else if(arr.length === 0) {
      return 1;
    } else {
      let result = 0;
      const res = arr.toString().split('');
      console.log(res);
      for(let i = 0; i < res.length; i++) {
        if(res[i] === ']') {
          result++;
        }
      }
    }
    return result;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};