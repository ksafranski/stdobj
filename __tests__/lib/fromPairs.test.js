const fromPairs = require('lib/fromPairs')

describe('fromPairs', () => {
  test('returns object created from array of key-value pairs', () => {
    const fixture = [ [ 'foo', 'bar' ], [ 'fizz', 'buzz' ] ]
    const actual = fromPairs(fixture)
    expect(fixture).toEqual(fixture)
    expect(actual).toEqual({
      foo: 'bar',
      fizz: 'buzz'
    })
  })
})
