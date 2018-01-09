const fs = require('fs');
let abi = fs.readFileSync('contracts/MyData.sol.abi');
let bin = fs.readFileSync('contracts/MyData.sol.bin');

let ContractManager = require('./scm').ContractManager;
let contractManager = new ContractManager(abi, bin, '123');

function testFindAtGet() {
    let contract = contractManager.findAt('0x0bfbc4b5c2d20d6dcae96ad5d3cd661397c0b85b');
    console.log(contract.get().toString());
}

function testFindAtSet() {
    let contract = contractManager.findAt('0x0bfbc4b5c2d20d6dcae96ad5d3cd661397c0b85b');
    console.log(contract.set(2018));
}

function testDeploy() {
    contractManager.deploy(function (contract) {
        console.log(contract);
    });
}

//testFindAtSet();
//testFindAtGet();
//testDeploy();

