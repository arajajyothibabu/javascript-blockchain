import SHA256  from 'crypto-js/sha256';

/**
 * Block class
 */
export default class Block {

    /**
     *
     * @param index
     * @param timestamp
     * @param data
     * @param previousHash
     */
    constructor(index, timestamp, data, previousHash = ""){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    /**
     * hash calculation
     */
    calculateHash = () => SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();

}