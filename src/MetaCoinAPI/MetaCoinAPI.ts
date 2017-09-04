
const ProviderEngine = require('web3-provider-engine')
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js')

const contract = require('truffle-contract')
let Web3 = require('web3')

export class MetaCoinAPI {
  public engine: any
  public web3: any
  public contract: any
  constructor(
    public abi: any = require('../../build/contracts/MetaCoin.json'),
    public providerUrl = 'http://localhost:8545'
  ){

    // this.engine = new ProviderEngine()
    // this.engine.addProvider(new RpcSubprovider({rpcUrl: this.providerUrl}) )
    // this.web3 = new Web3(this.engine)

    this.web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
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
    return new Promise((resolve, reject) =>{
      instance.getBalance.call(address, (error: any, result: any) => { 
          if(error){
            return reject(error)
          }
          return resolve(result)
       })
    })
  }
  
}
    // var hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed("couch solve unique spirit wine fine occur rhythm foot feature glory away"));
    // // Get the first account using the standard hd path.
    // var wallet_hdpath = "m/44'/60'/0'/0/";
    // var wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet();
    // this.engine.addProvider(new WalletSubprovider(
    //   wallet
    //   , {})
    // );
    