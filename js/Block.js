import SHA256  from 'crypto-js/sha256';

/**
 * Block class
 */
export default class Block {

    /**
     *
     * @param timestamp
     * @param transactions
     * @param previousHash
     */
    constructor(timestamp, transactions, previousHash = ""){
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    /**
     * hash calculation
     */
    calculateHash = () => SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();

    /**
     *
     * @param difficulty
     */
    mineBlock = (difficulty) => {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')){
            this.nonce++;
            this.hash = this.calculateHash();
        }
    }

}