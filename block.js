import cryptoJs from 'crypto-js';
const { SHA256 } = cryptoJs;

class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block - 
        Timestamp: ${this.timestamp}
        Last hash: ${this.lastHash.substring(0, 10)}
        Hash: ${this.hash.substring(0, 10)}
        Data: ${this.data}`
    }

    static genesis() {
        return new Block('Genesis time', '-----', 'f!r57-h45h', []);
    }

    static mineBlock(lastBlock, data) {
        const timeStamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timeStamp, lastHash, data);
        return new this(timeStamp, lastHash, hash, data);
    }

    static hash(timeStamp, lastHash, data) {
        return SHA256(`${timeStamp}${lastHash}${data}`).toString();
    }

    static generateHash(block) {
        const { timeStamp, lastHash, data } = block;
        return Block.hash(timeStamp, lastHash, data);
    }
}

export default Block;