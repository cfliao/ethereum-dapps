# ethereum-dapps
The objective of this work is to serve as a framework for writing dapps on ethereum.
For now, only a set of classes for compiling, deploying and invoking smart contract is provided.


To learn how to use these the classes, please refer to the test cases.

Currently, the code works on Solc 0.4.19 and Web3.js 1.0.0-beta.27.

## Prerequisite

The following parameters defaults are configured:
1. the default password of local account[0] is set to `nccutest` (can be overwritten by passing as a parameter of the constructor of `ContractManager`)
2. the default httpProvider url is: `ws://localhost:8546`

Also, make sure the following geth parameters are added:
`--wsorigins "*" --ws --wsapi "eth,net,web3,debug,personal,admin"`

If `personal` is not added in the rpcapi list, then the account can not be unlocked automatically.

## Example

Compiling a solidity-based contract:
```js
const ContractManager = require('./scm');

ContractManager.compileFile('./contracts/MyData.sol', function (err, result) {
        if (err) throw err;
        console.log(result);
});
```

Assuming that we have the following contract file:
```solidity
contract MyData {
    uint data;

    function set(uint x) public {
        data = x;
    }

    function get() public constant returns (uint retVal) {
        return data;
    }
}
```

To deploy or call the smart contract, the ContractManager has to be initialized first:
```js
const fs = require('fs');
let abi = fs.readFileSync('contracts/MyData.sol.abi');
let bin = fs.readFileSync('contracts/MyData.sol.bin');

let ContractManager = require('./scm');
let contractManager = new ContractManager(abi, bin);
```

Then, you can deploy a contract:
```js
contractManager.deploy(function (contract) {
        console.log(contract.address);
    });
```

After the contract is deployed, you can obtain an instance of the contract by its reference:
```js
// The contract address can be obtained by calling contract.address in the previous step
let contract = contractManager.findAt('0x0bfbc4b5c2d20d6dcae96ad5d3cd661397c0b85b');
console.log(contract.get().toString());
contract.set(2018);
```
