import Block from './block';

describe('Block tests', () => {
    let data;
    let lastBlock;
    let newBlock;

    beforeEach(() => {
        data = 'test-data';
        lastBlock = Block.genesis()
        newBlock = Block.mineBlock(lastBlock, data);
    });

    test('should have propert data of value "test-data"', () => {
        expect(newBlock).toHaveProperty('data', 'test-data');
    });

    test('should have lastHash value of lastBlock.hash', () => {
        expect(newBlock).toHaveProperty('lastHash', lastBlock.hash)
    });
});