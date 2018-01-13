const ContractManager = require('../scm');
const fs = require('fs');
const net = require('net');
const Web3 = require('web3');
//const web3 = new Web3(new Web3.providers.IpcProvider('\\\\.\\pipe\\geth.ipc', net));
//console.log(process.platform)
//const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
let abi = fs.readFileSync('../contracts/MyData.sol.abi').toString();
let bin = fs.readFileSync('../contracts/MyData.sol.bin').toString();
// web3.eth.getAccounts().then(accounts => {
//     web3.eth.personal.unlockAccount(accounts[0], '123');
//     let abi = fs.readFileSync('../contracts/MyData.sol.abi').toString();
//     let bin = fs.readFileSync('../contracts/MyData.sol.bin').toString();
//     let c = new web3.eth.Contract(JSON.parse(abi), '0x8BDc958EB81f1834abABc3b0bE8ddD82669FF79A');
//     c.deploy({data: '0x' + bin, arguments: undefined}).send({
//         from: accounts[0], gas: '4700000'
//     }).then(contract => {
//         console.log(contract.options.address);
//         process.exit();
//     });
//     c.methods.get().call().then(console.log);
//     c.methods.set(2002).send({from: accounts[0], gas: 123123}).then(_ =>
//         c.methods.get().call().then(console.log)
//     );
// });
let contractManager = new ContractManager(abi, bin, '123');
let contract = contractManager.findAt('0x8BDc958EB81f1834abABc3b0bE8ddD82669FF79A');
contract.methods.get().call().then(console.log);

//



