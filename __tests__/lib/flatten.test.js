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

describe('flatten', () => {
  test('flattens object liteal to single level, dot-notated keys', () => {
    const actual = flatten(fixture)
    expect(fixture).toEqual(fixture)
    expect(actual).toEqual({
      'str': 'string',
      'num': 18,
      'bool': true,
      'nil': null,
      'arr': [ 'a' ],
      'obj.deep': 'deep',
      'obj.nested.obj': 'nested'
    })
  })
})
