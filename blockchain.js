import Block from './block.js';

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock(data) {
        const newBlock = Block.mineBlock(this.chain[this.chain.length - 1], data);
        this.chain.push(newBlock);
        return newBlock;
    }
}

export default Blockchain;