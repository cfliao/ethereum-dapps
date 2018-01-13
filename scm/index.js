const fs = require('fs');
const Web3 = require('web3');
const compiler = require('solc');
const passwordDefault = 'nccutest';
const providerDefault = new Web3.providers.WebsocketProvider('ws://localhost:8546');

class ContractManager {

    constructor(abi, bytecode, accountPassword) {
        this.web3 = new Web3(providerDefault);
        let password = accountPassword;
        if (!password) password = passwordDefault;
        this.web3.eth.getAccounts().then(accounts => {
            this.account = accounts[0];
            this.web3.eth.personal.unlockAccount(this.account, password);
        });
        this.abi = JSON.parse(abi);
        this.bytecode = '0x' + bytecode;
    }

    deploy(callback) {
        let c = new this.web3.eth.Contract(this.abi);
        let _this = this;
        c.deploy({data: this.bytecode, arguments: undefined})
            .send({
                from: this.account, gas: '4700000'
            })
            .then(contract => {
                if (contract && contract.options.address) {
                    callback(new Contract(_this.account, contract.options.address, contract));
                }
            });
    }

    findAt(address) {
        return new this.web3.eth.Contract(this.abi, address);
        //return new Contract(this.account, address, c);
    }

    static compile(code, callback) {
        let result = compiler.compile(code, 1);

        if (callback)
            callback(result.errors, result);
    }

    static compileFile(sourcePath, callback) {

        this.compile(fs.readFileSync(sourcePath).toString(), function (err, result) {

            for (let contractName in result.contracts) {
                fs.writeFileSync(sourcePath + '.abi', result.contracts[contractName].interface);
                fs.writeFileSync(sourcePath + '.bin', result.contracts[contractName].bytecode);
            }
            if (callback)
                callback(result.errors, result);
        });
    }
}

// class Contract {
//     constructor(account, address, contractInfo) {
//         this.contractInfo = contractInfo;
//         this.address = address;
//         this.account = account;
//         for (let key in contractInfo.methods) {
//             if (typeof contractInfo.methods[key] === 'function') {
//                 this[key] = function (...args) {
//                     return this.call(key, args);
//                 }
//             }
//         }
//     }
//
//     getContractInfo() {
//         return this.contractInfo;
//     }
//
//     call(name, args, gas) {
//         if (!args) args = [];
//         if (!gas) gas = 123123;
//         args.push({from: this.account, gas: gas});
//         return this.contractInfo.methods[name].apply(this.contractInfo.methods, args);
//     }
// }

module.exports = ContractManager;


