var SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timeStamp, data, previousHash) {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.miningCounter = 1;
  }

  calculateHash(){
     return SHA256(this.index + this.timeStamp + JSON.stringify(this.data) + this.previousHash + this.miningCounter).toString();
  }
  
  mineBlock(difficulty){
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')){
      this.miningCounter++;
      this.hash = this.calculateHash();
    }
  }
}

module.exports = Block;
