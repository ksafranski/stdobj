const isObj = require('./isObj')
const keys = require('./keys')

const merge = (...obs) => {
  return obs.reduce((acc, o) => {
    keys(o).forEach((k) => {
      if (Array.isArray(acc[k]) && Array.isArray(o[k])) {
        acc[k] = acc[k].concat(...o[k])
      } else if (isObj(acc[k]) && isObj(o[k])) {
        acc[k] = merge(acc[k], o[k])
      } else {
        acc[k] = o[k]
      }
    })
    return acc
  }, {})
}

module.exports = merge
