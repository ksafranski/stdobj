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
  it('sets the value to the key after parsing arrays in dot-notation', () => {
    const o = {}
    set(o, 'foo[0]', 'one')
    set(o, 'foo[1]', 'two')
    set(o, 'foo[2].bar', 'fizz')
    expect(o).toEqual({
      foo: [
        'one',
        'two',
        { bar: 'fizz' }
      ]
    })
  })
})
