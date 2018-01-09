# ethereum-dapps
The objective of this work is to serve as a framework for writing dapps on ethereum.
For now, only a set of classes for compiling, deploying and invoking smart contract is provided.


To learn how to use these the classes, please refer to the test cases.

Currently, the code works on Solc 0.4.19 and Web3.js 0.20.1.

The following parameters defaults are configured:
1. the default password of local account[0] is set to 'nccutest' (can be overwritten in the constructor of ContractManager)
2. the default httpProvider url is: http://localhost:8545

Also, make sure the following geth parameters are added:
 --rpccorsdomain "*" --rpc --rpcapi "eth,net,web3,debug,personal,admin" --shh

If 'personal' is not added in the rpcapi list, then the account can not be unlocked automatically.
