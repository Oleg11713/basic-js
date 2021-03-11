const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) === false) return false;
    let team = [];
    members.forEach(function (person){
      if(typeof person == "string") {
        const symbol = person.trim()[0].toUpperCase();
        team.push(symbol);
      }
    });
     return team.sort().join('');
};
