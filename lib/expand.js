const keys = require('./keys')
const set = require('./set')

/**
 * Expands a dot-notated, flattened object to a nested object literal
 * @param {Object} o Flattened (dot-notated) object
 * @returns {Object}
 */
const expand = (o) => {
  const newObj = Object.create({})
  keys(o).forEach(k => {
    set(newObj, k, o[k])
  })
  return newObj
}

module.exports = expand
