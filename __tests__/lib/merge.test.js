const merge = require('lib/merge')

const fixtureOne = {
  foo: {
    bar: 'baz'
  }
}

const fixtureTwo = {
  foo: {
    fizz: 'buzz'
  }
}

const fixtureThree = {
  arr: [ 'quz' ],
  nil: null
}

const fixtureFour = {
  arr: [ 'qiz' ],
  bool: false,
  num: 18
}

describe('merge', () => {
  test('merges mutliple objects and returns new object', () => {
    const actual = merge(fixtureOne, fixtureTwo, fixtureThree, fixtureFour)
    expect(actual).toEqual({
      foo: {
        bar: 'baz',
        fizz: 'buzz'
      },
      arr: [ 'quz', 'qiz' ],
      nil: null,
      bool: false,
      num: 18
    })
  })
})
