const Block = require('./Blockchain');

/*const fooblock=Block.mineBlock(Block.genesis(),'happy');
console.log(fooblock.toString());*/
const bc2 = new Block();
/*console.log(bc2.addBlock('times').toString());*/

for (let i=0; i<10; i++) {
  console.log(bc2.addBlock(`foo ${i}`).toString());
}
