const SHA256 = require('crypto-js/sha256');
class Block{
	constructor(timestamp, lastHash, hash, data){
		this.timestamp=timestamp;
		this.lastHash=lastHash;
		this.hash=hash;
		this.data=data;
	}
	toString(){
		return `Block-
		Timestamp: ${this.timestamp}
		Last hash: ${this.lastHash.substring(0,25)}
		Hash     : ${this.hash.substring(0,25)}
		Data     : ${this.data}`;
	}
	static genesis(){
		return new this('happy','------','aered4-fs',[]);
	}
	static mineBlock(lastBlock,data){
		const timestamp=Date.now();
		const lastHash=lastBlock.hash;
		const hash=Block.hash(timestamp,lastHash,data);
		return new this(timestamp, lastHash , hash , data);
		console.log(timestamp);

	}
	static hash(timestamp,lastHash,data){
		return SHA256(`${timestamp}${lastHash}${data}`).toString();
	}
	static blockHash(block){
		const { timestamp, lastHash , data }=block;
		return Block.hash(timestamp,lastHash,data);
	}
}
module.exports = Block;