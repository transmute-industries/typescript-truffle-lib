import { MetaCoinAPI } from './MetaCoinAPI'

describe(`MetaCoinAPI`, () => {
  let metaCoinAPI: MetaCoinAPI

  // it(`should be defined`, () => {
  //   const metaCoinAPI = new MetaCoinAPI()
  //   expect(metaCoinAPI).toBeDefined()
  // })

  // it(`should use localhost:8545 by default`, () => {
  //   const metaCoinAPI = new MetaCoinAPI()
  //   expect(metaCoinAPI.web3.currentProvider._providers[0].rpcUrl).toBe('http://localhost:8545')
  // })

  // it(`should use local abi by default`, () => {
  //   const metaCoinAPI = new MetaCoinAPI()
  //   expect(metaCoinAPI.abi).toBe(require('../../build/contracts/MetaCoin.json'))
  // })

  it.only("should put 10000 MetaCoin in the first account", (done) => {
    const metaCoinAPI = new MetaCoinAPI()
    metaCoinAPI.web3.eth.getAccounts((error: any, result: any) =>{
      console.log(result)
      done();
    })
    
    
    // metaCoinAPI.web3.eth.getAccounts().then(console.log)

    // console.log(metaCoinAPI.web3.eth.getAccounts(function(a:any, b: any){
    //   console.log(a, b)
    //   done();
    // }))
  //   metaCoinAPI.web3.eth.getAccounts((error: any, result: any) => { 
  //     if(error){
  //       console.log(error);
  //     }
  //     console.log(result);
  //  })
    // 
    // let accounts = await metaCoinAPI.getAccounts()
    // let instance = await metaCoinAPI.contract.deployed()
    // let balance = await metaCoinAPI.getBalance(instance, accounts[0])
    // console.log(balance)
  })

})
