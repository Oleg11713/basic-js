const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let resultAll = [];
    let resultAddition = [];

    str = String(str);

    if(!options.separator) {
        options.separator = "+";
    }

    if(options.hasOwnProperty("addition")) {

        options.addition = String(options.addition);

        if(!options.additionSeparator) {
            options.additionSeparator = "|";
        }
        
        resultAddition.push(str);
        resultAddition.push(options.addition);
        for(let j = 0; j < options.additionRepeatTimes - 1; j++) {
            resultAddition.push(options.additionSeparator);
            resultAddition.push(options.addition);
        }
        str = resultAddition.join('');
        }
    
    for(let i = 0; i < options.repeatTimes - 1; i++) {
        resultAll.push(str);
        resultAll.push(options.separator);
    }
    resultAll.push(str);
      
    return resultAll.join('');
};
  