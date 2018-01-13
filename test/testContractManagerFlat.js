const ContractManager = require('../scm');
const fs = require('fs');
const net = require('net');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.IpcProvider('\\\\.\\pipe\\geth.ipc', net));
//console.log(process.platform)
//const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

web3.eth.getAccounts().then(accounts => {
    console.log(accounts[0]);
    web3.eth.personal.unlockAccount(accounts[0], '123');
    let abi = fs.readFileSync('../contracts/MyData.sol.abi').toString();
    let bin = fs.readFileSync('../contracts/MyData.sol.bin').toString();
    let c = new web3.eth.Contract(JSON.parse(abi));
    // c.deploy({data: '0x' + bin, arguments: undefined}).send({
    //     from: accounts[0], gas: '4700000'
    // }).then(result => {
    //     console.log(result);
    //     return;
    // });
    process.exit();
});


//let account = this.web3.eth.accounts[0];

//



