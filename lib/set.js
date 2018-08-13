/**
 * Sets a propert on an object based on provided key (can use dot-notation)
 * @param {Object} o Object to set
 * @param {String} key Key (allowing dot-notation) to set
 * @param {*} value Value to set
 */
const set = (o, key, value) => {
  const kArr = key.split('.')
  const cur = kArr.shift()
  if (kArr.length === 0) {
    // At destination, set value
    o[cur] = value
  } else {
    /* istanbul ignore next: only sets if nothing exists here */
    if (!o[cur]) o[cur] = {}
    // Recurse with next step in dot-notation
    set(o[cur], kArr.join('.'), value)
  }
}

module.exports = set
