import { MetaCoinAPI } from './MetaCoinAPI'


describe(`MetaCoinAPI`, () => {
  let metaCoinAPI: MetaCoinAPI

  it(`should be defined`, () => {
    const metaCoinAPI = new MetaCoinAPI()
    expect(metaCoinAPI).toBeDefined()
  })

  it(`should use localhost:8545 by default`, () => {
    const metaCoinAPI = new MetaCoinAPI()
    expect(metaCoinAPI.web3.currentProvider._providers[0].provider.host).toBe('http://localhost:8545')
  })

  it(`should use local abi by default`, () => {
    const metaCoinAPI = new MetaCoinAPI()
    expect(metaCoinAPI.abi).toBe(require('../../build/contracts/MetaCoin.json'))
  })

  it("should provide getAccounts as promise",  async () => {
    const metaCoinAPI = new MetaCoinAPI()
    let accounts: any = await metaCoinAPI.getAccounts()
    expect(accounts.length).toBe(10)
  })

  it("should put 10000 MetaCoin in the first account",  async () => {
    const metaCoinAPI = new MetaCoinAPI()
    let accounts = await metaCoinAPI.getAccounts()
    // console.log(accounts)
    const instance = await metaCoinAPI.contract.deployed()
    // console.log(instance)
    let balance = await metaCoinAPI.getBalance(instance, accounts[0])
    // console.log(balance)
    expect(balance).toBe(10000)
  })

})
