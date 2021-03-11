const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = '';
    for (let i = 0; i < members.length; i++){
      if(members[i].split("")[0] == members[i].slpit("")[0].toUpperCase())
      team += members[i].toString()[0];
    }
    team.split("").sort().join("");
    return team;
};
