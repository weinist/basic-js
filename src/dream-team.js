const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  for(let i = 0; i < array.length; i++) {
    if(typeof array !== 'string') {
      let item = array[i];
      array.splice(item, 1);
    } else {
      array[i] = item[0];
    }
  }
  return array.sort().join('');
};
