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
    },
    arr: [
      { arrA: 'a' },
      { arrB: 'b' }
    ]
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
      'arr[0]': 'a',
      'obj.deep': 'deep',
      'obj.nested.obj': 'nested',
      'obj.arr[0].arrA': 'a',
      'obj.arr[1].arrB': 'b'
    })
  })
  test('returns original value if not an object or array', () => {
    const actual = flatten('foo')
    expect(actual).toEqual('foo')
  })
})
