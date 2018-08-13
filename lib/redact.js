const keys = require('./keys')
const isObj = require('./isObj')

/**
 * Redacts keys and/or values from an object literal
 * @param {Object} o The object from which to redact keys or values
 * @param {Object} redactions `keys<Array>` and `values<Array>` to redact
 * @param {String} prevKey Previous key position used in recursion
 */
const redact = (o, redactions, prevKey = '') => {
  return keys(o).reduce((acc, k) => {
    // Create a string of the key, remove any tacked-on leading '.'
    const dotKey = `${prevKey}.${k}`.replace(/^\./, '')
    if (!redactions.keys.includes(dotKey) && !redactions.values.includes(o[k])) {
      if (isObj(o[k])) {
        // Recurse on objects
        const redactedObj = redact(o[k], redactions, dotKey)
        // If it comes back empty, trash it
        if (keys(redactedObj).length > 0) acc[k] = redactedObj
      } else {
        acc[k] = o[k]
      }
    }
    return acc
  }, {})
}

module.exports = redact
