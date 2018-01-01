const BlockChain = require('./BlockChain');
const Block = require('./Block');
describe('Create and test BlockChain with 3 simple blocks', ()=>{
  let bChain = new BlockChain();
  bChain.addNewBlock(new Block(1, '01/01/2018', 'First real block', undefined));
  bChain.addNewBlock(new Block(2, '01/01/2018', 'Second real block', undefined));

  test('bChain should have 3 blocks', () => {
    expect(bChain.chain.length).toBe(3);
  });
})
