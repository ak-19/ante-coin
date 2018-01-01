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
}

module.exports = BlockChain;
