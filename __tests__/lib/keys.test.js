const keys = require('lib/keys')

const fixture = { foo: 'bar', fizz: 'buzz' }

describe('keys', () => {
  test('returns keys from object literal', () => {
    const actual = keys(fixture)
    expect(actual).toEqual([ 'foo', 'fizz' ])
  })
})
