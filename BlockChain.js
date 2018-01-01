const Block = require('./Block');
class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock(){
    return new Block(0, '01/01/2018', 'Genesis block', undefined);
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addNewBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isValid(){
    for (var i = 1; i < this.chain.length; i++) {
      let currentBlock = this.chain[i];
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      let previousBlock = this.chain[i - 1];
      if (previousBlock.hash != currentBlock.previousHash) {
        return false;
      }
      return true;
    }
  }
}

module.exports = BlockChain;
