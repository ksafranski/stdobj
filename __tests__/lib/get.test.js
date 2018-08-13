const get = require('lib/get')

const fixture = {
  foo: {
    bar: {
      fizz: 'buzz'
    }
  }
}

describe('get', () => {
  test('returns value from a key using dot-notation', () => {
    const actual = get(fixture, 'foo.bar.fizz')
    expect(actual).toEqual('buzz')
  })
})
