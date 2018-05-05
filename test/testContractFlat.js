const ContractManager = require('../scm');

const fs = require('fs');
const abi = fs.readFileSync('../contracts/MyData.sol.abi');
const bin = fs.readFileSync('../contracts/MyData.sol.bin');

let contractManager = new ContractManager(abi, bin, '123');

let contract = contractManager.findAt('0x599de34ee03e16368f33b4365d5223d5c8a2b0bf');
console.log(contract.get());
//console.log(contract.set(2019));
