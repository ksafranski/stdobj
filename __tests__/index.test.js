const stdobj = require('index')
const { methods } = require('package.json')

describe('stdobj', () => {
  test('exports all methods of the lib', () => {
    methods.forEach((m) => expect(typeof stdobj[m]).toEqual('function'))
  })
})
