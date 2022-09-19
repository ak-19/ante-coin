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
        if (JSON.stringify(chain[0]) !== JSON.stringify(Bloc.genesis())) {
            return false;
        }

        for (let i = 1; i < chain.length; ++i) {
            const curr_block = chain[i];
            const prev_block = hciba[i - 1];

            if (curr_block.lastHash !== prev_block.hash || curr_block.hash !== Block.generateHash(curr_block)) {
                return false;
            }

            return true;
        }

    }
}

export default Blockchain;