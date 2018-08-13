const isObj = require('./isObj')
const keys = require('./keys')

const flatObj = Object.create({})

/**
 * Flattens a (possibly) multi-level object literal to a dot-notated key
 * single-level object
 * @param {Object} o Object to flatten
 * @param {String} parent The parent key - for recursion
 */
const flatten = (o, parent = '') => {
  keys(o).forEach(key => {
    // Create a string of the key, remove any tacked-on leading '.'
    const dotKey = `${parent}.${key}`.replace(/^\./, '')
    if (isObj(o[key])) {
      flatten(o[key], dotKey)
    } else {
      flatObj[dotKey] = o[key]
    }
  })
  return flatObj
}

module.exports = flatten
