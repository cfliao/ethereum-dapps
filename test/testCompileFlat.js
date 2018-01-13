const ContractManager = require('../scm');
const fs = require('fs');

ContractManager.compileFile('../contracts/MyData.sol', function (err, result) {
    console.log(result);
});