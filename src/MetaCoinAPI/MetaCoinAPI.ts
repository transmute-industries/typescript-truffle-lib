
const ProviderEngine = require('web3-provider-engine')
const WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
const Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");

const bip39 = require("bip39");
const hdkey = require('ethereumjs-wallet/hdkey')
const contract = require('truffle-contract')

const Web3 = require('web3')

const wallet_mneumonic = 'couch solve unique spirit wine fine occur rhythm foot feature glory away'
const wallet_address = '0xc3d2a1629d3990d8b9d9799c8675ec18c6f00247'

const getWallet = () =>{
  const seed = bip39.mnemonicToSeed()
  var hdwallet = hdkey.fromMasterSeed(seed);
  // Get the first account using the standard hd path.
  var wallet_hdpath = "m/44'/60'/0'/0/";
  var wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet(wallet_mneumonic);
  return wallet
}

export class MetaCoinAPI {
  public engine: any
  public web3: any
  public contract: any
  constructor(
    public abi: any = require('../../build/contracts/MetaCoin.json'),
    public providerUrl = 'http://localhost:8545'
  ){

    this.engine = new ProviderEngine()
    this.engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(providerUrl)));
    this.engine.addProvider(new WalletSubprovider(
      getWallet()
      , {})
    );
    this.engine.start()
    this.web3 = new Web3(this.engine)
    this.contract = contract(this.abi)
    this.contract.setProvider(this.web3.currentProvider)
  }

  public getAccounts = () =>{
    return new Promise((resolve, reject) =>{
      this.web3.eth.getAccounts((error: any, result: any) => { 
          if(error){
            return reject(error)
          }
          return resolve(result)
       })
    })
  }

  public getBalance = (instance: any, address: string) =>{
    return  instance.getBalance.call(address)
    .then((data: any) =>{
      return data.toNumber()
    })
  
  }
  
}



