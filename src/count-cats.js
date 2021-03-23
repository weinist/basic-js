const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  const cat = '^^';
  let count = 0;
  for(let i = 0; i < matrix.length; i++) {
    const innerMatrix = matrix[i];
    for(let j = 0; j < innerMatrix.length; j++) {
      if(innerMatrix[j] === cat) {
        count++;
      }
    }
  }
  return count;
  
  // remove line with error and write your code here
};
