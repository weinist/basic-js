const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  if((!sampleActivity) || (typeof sampleActivity !== "string") || (sampleActivity < 0) || 
  (MODERN_ACTIVITY < sampleActivity)) {
    return false;
  }
  sampleActivity = parseFloat(sampleActivity);
  if(!sampleActivity) {
    return false;
  }
  return Math.ceil(((Math.log(MODERN_ACTIVITY / sampleActivity)) / (Math.log(2)) * HALF_LIFE_PERIOD));
  // remove line with error and write your code here
};
