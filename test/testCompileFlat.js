const ContractManager = require('../scm');
const fs = require('fs');

ContractManager.compileFile('../contracts/MyData.sol', function (err, result) {
    if (err) throw err;
    console.log(result);
});