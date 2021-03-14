const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(this.array[position-1] === undefined)
    {this.array = []; throw new Error();}
    else this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let string = this.array.join("~~");
    this.array = [];
    return string;
  }
};

module.exports = chainMaker;
