const toPairs = require('lib/toPairs')

const fixture = { foo: 'bar', fizz: 'buzz' }

describe('toPairs', () => {
  test('returns [ key, value ] pairs array', () => {
    const actual = toPairs(fixture)
    expect(actual).toEqual([
      [ 'foo', 'bar' ],
      [ 'fizz', 'buzz' ]
    ])
  })
})
