const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  if(!Array.isArray(array)) {
    return false;
  }
  array.forEach(el => {
    if(typeof(el) === 'string') {
      el = el.trim().slice(0,1).toUpperCase();
      result.push(el);
    }
  });
  return result.sort().join('');
};
