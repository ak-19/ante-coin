import Block from './block.js';
import Blockchain from './blockchain.js';

describe('Blockchain', () => {
    let bc;

    beforeEach(() => {
        bc = new Blockchain();
    });

    describe('When created', () => {
        test('blockchain should start with genesis block', () => {
            expect(bc.chain[0]).toEqual(Block.genesis())
            expect(bc.chain[0]).toHaveProperty('hash', 'f!r57-h45h')
        });
    });

    describe('When new block is created', () => {
        test('blockchain should end with block containing passed data', () => {
            const data = 'test-data-1'
            const newBlock = bc.addBlock(data)
            const lastBlock = bc.chain[bc.chain.length - 1];
            expect(newBlock).toHaveProperty('data', data)
            expect(lastBlock).toHaveProperty('data', data)
        });
    });
});