const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        count = this.calculateDepth(arr[i]);
        if(max < count){
          max = count;
        }
      }
    }
    return max + 1;
  }
};