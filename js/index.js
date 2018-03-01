import Blockchain from "./Blockchain";
import Block from "./Block";

const jbCoin = new Blockchain(new Date().toISOString());

jbCoin.addBlock(new Block(1, new Date().toISOString(), {money: 100}));

jbCoin.addBlock(new Block(2, new Date().toISOString(), {money: 100}));

jbCoin.addBlock(new Block(3, new Date().toISOString(), {money: 100}));

jbCoin.addBlock(new Block(4, new Date().toISOString(), {money: 100}));

console.info(jbCoin.isValid());

console.info(JSON.stringify(jbCoin, null, 4));