const ContractManager = require('../scm');
const fs = require('fs');
const chai = require('chai'), should = chai.should();

describe('test the compile function of ContractManager', function () {
    context('when the input is a string', function () {

        it('should provide error messages if there are errors', function () {
            ContractManager.compile('xxx', function (err, result) {
                should.exist(err);
                should.exist(result);
            });
        });

        it('should not provide error if there is no error', function () {
            ContractManager.compile(fs.readFileSync('./contracts/MyData.sol').toString(), function (err, result) {
                should.not.exist(err);
                should.exist(result);
            });
        });
    });

    context('when the input is a file', function () {
        it('should generate abi and bin and should not provide err if there is no error', function () {
            ContractManager.compileFile('./contracts/MyData.sol', function (err, result) {
                //TODO: not complete, and need to be revised. Need to generate the sol file before the test
                should.not.exist(err);
                should.exist(result);
            });
        });
    });
});
