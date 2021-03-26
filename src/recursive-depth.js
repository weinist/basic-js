const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;

    arr.forEach(el => {
      if(Array.isArray(el)) {
        res = Math.max(this.calculateDepth(el)+1, res);
      }
    });
    
    return res;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}