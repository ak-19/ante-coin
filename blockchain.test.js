import Block from './block.js';
import Blockchain from './blockchain.js';

describe('Blockchain', () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
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

    describe('Validate the chain after adding the block', () => {
        test('should return true', () => {
            bc2.addBlock('test-data-1');
            expect(bc.isValid(bc2.chain)).toBe(true);
        });
    });

    describe('When genesis block is corrupted', () => {
        test('validation should fail', () => {
            bc.chain[0].data = 'bad-data';
            expect(bc2.isValid(bc.chain)).toBe(false);
        });
    });

    describe('When newly added block data is corrupted', () => {
        test('validations hsould fail of the group', () => {
            bc2.addBlock('not-corrupt');
            bc2.chain[1].data = 'corrupt';
            expect(bc.isValid(bc2.chain)).toBe(false)
        });
    });
});