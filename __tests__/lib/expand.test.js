const expand = require('lib/expand')
const flatten = require('lib/flatten')

const fixture = {
  str: 'string',
  num: 18,
  bool: true,
  nil: null,
  arr: [ 'a' ],
  obj: {
    deep: 'deep',
    nested: {
      obj: 'nested'
    }
  }
}

describe('expand', () => {
  test('expands a dot-notated, flattend object', () => {
    const flattened = flatten(fixture)
    const actual = expand(flattened)
    expect(actual).toEqual(fixture)
  })
})
