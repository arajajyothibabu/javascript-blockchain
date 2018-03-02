import Block from "./Block";
import Transaction from "./Transaction";

/**
 * Blockchain class
 */
export default class Blockchain {

    /**
     *
     * @param timestamp
     * @param difficulty
     * @param miningReward
     */
    constructor(timestamp, difficulty = 1, miningReward = 100){
        this.chain = [this.genesisBlock(timestamp)];
        this.difficulty = difficulty;
        this.pendingTransactions = [];
        this.miningReward = miningReward;
    }

    /**
     *
     * @param timestamp
     * @returns {Block}
     */
    genesisBlock = (timestamp) => new Block(timestamp, []);

    /**
     *
     * @returns {*}
     */
    getLatestBlock = () => this.chain[this.chain.length - 1];

    /**
     *
     * @param block
     */
    addBlock = (block) => { //just for learning, not in real world
        block.previousHash = this.getLatestBlock().hash;
        block.mineBlock(this.difficulty);
        this.chain.push(block);
    };

    /**
     *
     * @param miningRewardAddress
     */
    minePendingTransactions = (miningRewardAddress) => {

        let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty); //mining block

        console.log("Block mined successfully..!");
        this.chain.push(block); //adding to blockchain

        this.pendingTransactions = [ //resetting pending transactions
            new Transaction(null, miningRewardAddress, this.miningReward) //reward for miner
        ];

    };

    /**
     *
     * @param transaction
     */
    createTransaction = (transaction) => {
        console.info("Adding transaction...\n", JSON.stringify(transaction, null, 4));
        this.pendingTransactions.push(transaction);
    };

    /**
     *
     * @param address
     * @returns {number}
     */
    getBalanceOfAddress = (address) => {
        let balance = 0;
        for(const block of this.chain){
            for(const transaction of block.transactions){
                if(transaction.fromAddress === address){
                    balance -= transaction.amount;
                }
                if(transaction.toAddress === address){
                    balance += transaction.amount;
                }
            }
        }
        return balance;
    };

    /**
     *
     * @returns {boolean}
     */
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