import Block from "./Block";

/**
 * Blockchain class
 */
export default class Blockchain {

    /**
     *
     * @param timestamp
     */
    constructor(timestamp){
        this.chain = [this.genesisBlock(timestamp)];
    }

    /**
     *
     * @param timestamp
     * @returns {Block}
     */
    genesisBlock = (timestamp) => new Block(0, timestamp, "Genesis Block");

    /**
     *
     * @returns {*}
     */
    getLatestBlock = () => this.chain[this.chain.length - 1];

    /**
     *
     * @param block
     */
    addBlock = (block) => {
        block.previousHash = this.getLatestBlock().hash;
        block.hash = block.calculateHash();
        this.chain.push(block);
    };

    isValid = () => {
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }

}