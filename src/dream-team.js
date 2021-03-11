const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = '';
    for (let i = 0; i < members.length; i++){
      if(members[i].toString()[0] == members[i].toString()[0].toUpperCase())
      team.push(members[i].toString()[0]);
    }
    return team;
};
