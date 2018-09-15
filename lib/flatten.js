const isObj = require('./isObj')
const keys = require('./keys')

/**
 * Flattens a (possibly) multi-level object literal to a dot-notated key
 * single-level object
 * @param {Object} o Object to flatten
 * @param {String} parent The parent key - for recursion
 * @param {Object} flatObj The aggregator - for recursion
 */
const flatten = (o, parent = '', flatObj = Object.create({})) => {
  if (!isObj(o) && !Array.isArray(o)) return o
  keys(o).forEach(key => {
    // Create a string of the key, remove any tacked-on leading '.'
    const dotKey = `${parent}.${key}`.replace(/^\./, '')
    if (isObj(o[key])) {
      flatten(o[key], dotKey, flatObj)
    } else if (Array.isArray(o[key])) {
      o[key].forEach((arrItem, idx) => {
        if (isObj(arrItem) || Array.isArray(arrItem)) {
          flatten(arrItem, `${dotKey}[${idx}]`, flatObj)
        } else {
          flatObj[`${dotKey}[${idx}]`] = arrItem
        }
      })
    } else {
      flatObj[dotKey] = o[key]
    }
  })
  return flatObj
}

module.exports = flatten
