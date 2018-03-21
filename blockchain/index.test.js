const Blockchain = require('./index');
const Block= require('./block');

describe('Blockchain', () => {
  let bc,bc1;

  beforeEach(() => {
    bc = new Blockchain();
    bc1 = new Blockchain();
  });

  it('starts with genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('adds a new block', () => {
    const data = 'happy';
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length-1].data).toEqual(data);
  });

  it('validates a chain is valid or not',()=>{
    bc1.addBlock('happy');
    expect(bc.isValidChain(bc1.chain)).toBe(true);
  });

  it('invalidates a chain with corrupt genesis block',()=>{
    bc1.chain[0].data='bad data';
    expect(bc.isValidChain(bc1.chain)).toBe(false);
  });

  it('invaliadte a corrupt chain',() => {
    bc1.addBlock('forr');
    bc1.chain[1].data='not forr';
    expect(bc.isValidChain(bc1.chain)).toBe(false);
  });
  it('replaces the chain with a valid chain',()=>{
    bc1.addBlock('goo');
    bc.replaceChain(bc1.chain);
    expect(bc.chain).toEqual(bc1.chain);
  });
  it('does not replace the chain with one of less than or equale to length',()=>{
    bc.addBlock('foo');
    bc.replaceChain(bc1.chain);
    expect(bc.chain).not.toEqual(bc1.chain);
  });
  
});