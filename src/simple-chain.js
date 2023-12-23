const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },

  addLink(value) {
    if (typeof value === "undefined") {
      value = "";
    }

    this.chainArray.push(value);
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position >= this.chainArray.length
    ) {
      this.chainArray = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArray.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chainArray = this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let linkedChain = "";

    for (let i = 0; i < this.chainArray.length; i++) {
      linkedChain += `( ${this.chainArray[i]} )`;

      if (i !== this.chainArray.length - 1) {
        linkedChain += "~~";
      }
    }

    this.chainArray = [];
    return linkedChain;
  },
};


module.exports = {
  chainMaker
};
