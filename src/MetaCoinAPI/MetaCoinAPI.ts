
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
    this.engine = new ProviderEngine()
    this.engine.addProvider(
      new RpcSubprovider({
        rpcUrl: this.providerUrl,
      })
    )
    // this.contract = contract(this.abi)
    // this.web3 = new Web3(this.engine)
    // this.contract.setProvider(this.web3.currentProvider)
  }
}
