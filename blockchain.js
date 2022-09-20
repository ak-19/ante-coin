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

    isValid(chain) {
        if (chain.length == 0) {
            return false;
        }
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
            return false;
        }

        for (let i = 1; i < chain.length; ++i) {
            const prevBlock = chain[i - 1];
            const block = chain[i];
            if (block.lastHash !== prevBlock.hash || block.hash !== Block.generateHash(block)) return false;
        }

        return true;
    }

    replaceChain(newChain) {
        if (newChain.length <= this.chain.length) {
            console.log('Received chain is smaller then current chain - aborting');
            return;
        }

        if (!this.isValid(newChain)) {
            console.log('Received chain is invalid - aborting');
            return;
        }

        this.chain = newChain;
    }
}

export default Blockchain;