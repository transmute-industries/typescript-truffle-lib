const fs = require('fs')

const hackyPatchy = (filePath, target, replacement) =>{
 fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(target, replacement);
    fs.writeFile(filePath, result, 'utf8', function (err) {
       if (err) return console.log(err);
       console.log('Patching: 🤖  🔬  🔪 ... ' + filePath);
    });
  });
}

hackyPatchy(
  'node_modules/web3/packages/web3-eth/node_modules/web3-eth-accounts/node_modules/scrypt/index.js',
  'var scryptNative = require("./build/Release/scrypt")',
  'var scryptNative = require("scrypt")'
)

hackyPatchy(
  'node_modules/web3/packages/web3-bzz/node_modules/got/index.js',
  "const pkg = require('./package');",
  "const pkg = require('./package.json');"
)