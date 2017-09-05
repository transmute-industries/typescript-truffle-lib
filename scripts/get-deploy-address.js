require('dotenv').config({path: '../secret.env'})

const bip39 = require("bip39");
const hdkey = require('ethereumjs-wallet/hdkey');

var mnemonic = process.env.MNEMONIC
var hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
var wallet_hdpath = "m/44'/60'/0'/0/";
var wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet();
const address =  "0x" + wallet.getAddress().toString("hex");
console.log(address)