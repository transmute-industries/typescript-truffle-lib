import { Greeter } from './Greeter'

describe(`Greeter`, () => {
  let greeter: Greeter

  beforeEach(() => {
    greeter = new Greeter('World')
  })

  it(`should greet`, () => {
    const actual = greeter.greet()
    const expected = 'Hello, World!'
    expect(actual).toBe(expected)
  })

  it(`should greetMe development`, () => {
    process.env.NODE_ENV = 'development'
    const actual = greeter.greetMe()
    const expected = 'Hello, World!'
    expect(actual).toBe(expected)
  })

  it(`should greetMe production`, () => {
    process.env.NODE_ENV = 'production'
    const actual = greeter.greetMe()
    const expected = 'Hello, World!'
    expect(actual).toBe(expected)
  })
})
