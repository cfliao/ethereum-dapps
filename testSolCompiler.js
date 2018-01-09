const SolCompiler = require('./scm').SolCompiler;
const fs = require('fs');

function testCompileError() {
    SolCompiler.compile('xxx', function (err, result) {
        if (err) throw err;
    });
}

function testCompileCorrect() {
    SolCompiler.compile(fs.readFileSync('./contracts/MyData.sol').toString(), function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

function testCompileFileCorrect() {
    SolCompiler.compileFile('./contracts/MyData.sol', function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

//testCompileFileCorrect();