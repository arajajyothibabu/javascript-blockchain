import Blockchain from "./Blockchain";
import Transaction from "./Transaction";

const jbCoin = new Blockchain(Date.now());

const isChainValid = () => {
    console.info("is Blockchain valid : ", jbCoin.isValid());
};

const getBalanceOf = (address) => {
    console.info("Balance of Address : ", address , ' : ', jbCoin.getBalanceOfAddress(address));
};

const printChain = () => {
    console.info(JSON.stringify(jbCoin, null, 4));
};

const addressA = "AddressA";
const addressB = "AddressB";
const addressC = "AddressC";

jbCoin.createTransaction(new Transaction(addressA, addressB, 50));
jbCoin.minePendingTransactions(addressC);
isChainValid();
getBalanceOf(addressA);
getBalanceOf(addressB);
getBalanceOf(addressC);
//printChain();

jbCoin.createTransaction(new Transaction(addressB, addressC, 20));
jbCoin.minePendingTransactions(addressA);
isChainValid();
getBalanceOf(addressA);
getBalanceOf(addressB);
getBalanceOf(addressC);
//printChain();

jbCoin.createTransaction(new Transaction(addressB, addressA, 30));
jbCoin.minePendingTransactions(addressC);
isChainValid();
getBalanceOf(addressA);
getBalanceOf(addressB);
getBalanceOf(addressC);
//printChain();

jbCoin.createTransaction(new Transaction(addressA, addressC, 70));
jbCoin.minePendingTransactions(addressB);
isChainValid();
getBalanceOf(addressA);
getBalanceOf(addressB);
getBalanceOf(addressC);

printChain();