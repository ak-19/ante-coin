const BlockChain = require('./BlockChain');
const Block = require('./Block');
describe('Create and test BlockChain with 3 simple blocks', ()=>{
  let bChain = new BlockChain();
  bChain.addNewBlock(new Block(1, '01/01/2018', 'First real block', undefined));
  bChain.addNewBlock(new Block(2, '01/01/2018', 'Second real block', undefined));

  test('Block Chain should have 3 blocks', () => {
    expect(bChain.chain.length).toBe(3);
  });

  test('Block Chain should be valid with correct chain of hash values', () => {
    expect(bChain.isValid()).toBeTruthy();
  });

  test('Block Chain should not be valid if middle block is tempered', () => {
    bChain.chain[1].data = 'changed data content';
    expect(bChain.isValid()).toBeFalsy();
  });
})
