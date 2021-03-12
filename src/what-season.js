const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!data) {
    return 'Unable to determine the time of year!';
  }
  if( isNaN(date.getTime())){  
    throw new Error();
  }
  let month = date.getMonth();
  let season = "";
  if (month >= 0 && month <= 1 || month == 11){
    season = "winter";
  }
  if (month >= 2 && month <= 4){
    season = "spring";
  }
  if (month >= 5 && month <= 7){
    season = "summer";
  }
  if (month >= 8 && month <= 10){
    season = "autumn";
  }
  return season;
};
