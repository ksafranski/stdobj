const redact = require('lib/redact')

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
    remove: {
      val: 'delete'
    }
  }
}

describe('redact', () => {
  test('redacts keys and values provided from object', () => {
    expect(fixture).toEqual(fixture)
    const actual = redact(fixture, {
      keys: [ 'obj.deep' ],
      values: [ 18, 'delete' ]
    })
    expect(actual).toEqual({
      str: 'string',
      bool: true,
      nil: null,
      arr: [
        'a'
      ],
      obj: {
        nested: {
          obj: 'nested'
        }
      }
    })
  })
})
