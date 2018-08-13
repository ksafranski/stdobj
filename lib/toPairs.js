const keys = require('./keys')

/**
 * Simple toPairs function to convert key value pairs to array of [ key, value ] arrays
 * @param {Object} o Object from which to generate pairs
 * @returns {Array} Pairs of [ key, value ]
 */
const toPairs = o => keys(o).reduce((acc, k) => acc.concat([[k, o[k]]]), [])

module.exports = toPairs
