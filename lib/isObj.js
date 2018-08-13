/**
 * Determines if parameter passed is an object literal
 * @param {*} o The 'object' to test
 * @return {Boolean}
 */
const isObj = (o) => o === Object(o) && !Array.isArray(o)

module.exports = isObj
