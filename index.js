const { methods } = require('./package.json')

// Create lib
const stdobj = methods.reduce((acc, m) => {
  acc[m] = require(`./lib/${m}`)
  return acc
}, {})

module.exports = stdobj
