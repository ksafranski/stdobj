const flatten = require('./flatten')

/**
 * Gets a value in an object from the key (allowing for dot-notation)
 * @param {Object} o The object from which to get the value
 * @param {String} key The key to search
 */
const get = (o, key) => flatten(o)[key]

module.exports = get
