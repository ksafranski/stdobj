/**
 * Converts array of key-value arrays to object
 * @param {Array} a Array to convert key-value pairs to object
 * @returns {Object}
 */
const fromPairs = (a) => a.reduce((acc, p) => {
  acc[p[0]] = p[1]
  return acc
}, {})

module.exports = fromPairs
