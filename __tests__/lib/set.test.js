const set = require('lib/set')

describe('set', () => {
  it('sets the value to key if not dot-notated', () => {
    const o = {}
    set(o, 'foo', 'bar')
    expect(o).toEqual({ foo: 'bar' })
  })
  it('sets the value to the key after recursing dot-notation', () => {
    const o = {}
    set(o, 'foo.bar.fizz', 'buzz')
    expect(o).toEqual({
      foo: {
        bar: {
          fizz: 'buzz'
        }
      }
    })
  })
})
