const keys = require('./keys')
const flatten = require('./flatten')
const expand = require('./expand')

/**
 * Redacts keys and/or values from an object literal
 * @param {Object} o The object from which to redact keys or values
 * @param {Object} redactions `keys<Array>` and `values<Array>` to redact
 * @param {String} prevKey Previous key position used in recursion
 */
const redact = (o, redactions) => {
  const flatObj = flatten(o)
  return expand(keys(flatObj).reduce((acc, k) => {
    if (!redactions.keys.includes(k) && !redactions.keys.includes(k.replace(/\[(.+?)\]/g, '[n]')) && !redactions.values.includes(flatObj[k])) {
      acc[k] = flatObj[k]
    }
    return acc
  }, {}))
}

module.exports = redact
