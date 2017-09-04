import { MetaCoinAPI } from './MetaCoinAPI'

describe(`MetaCoinAPI`, () => {
  let metaCoinAPI: MetaCoinAPI

  it(`should be defined`, () => {
    const metaCoinAPI = new MetaCoinAPI()
    expect(metaCoinAPI).toBeDefined()
  })

  it(`should be use localhost:8545 by default`, () => {
    const metaCoinAPI = new MetaCoinAPI()
    // console.log(metaCoinAPI.web3.currentProvider)
  })
})
