import Block from './block.js'

const testblock = Block.mineBlock(Block.genesis(), 'test block');

console.log(testblock.toString());
