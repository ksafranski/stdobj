/* eslint no-cond-assign: 0 */
/**
 * Sets a propert on an object based on provided key (can use dot-notation)
 * @param {Object} o Object to set
 * @param {String} key Key (allowing dot-notation) to set
 * @param {*} value Value to set
 */
const set = (o, key, value) => {
  const rReg = /\[(\d+)\](?=(?:\[\d+\])*)/g
  const curFull = key.split('.', 1)[0] // Entire first segment
  const remaining = key.length === curFull.length ? '' : key.substr(curFull.length + 1) // Remaining segments
  let cur = curFull.substr(0, curFull.indexOf('[')) || curFull // First segment without trailing array indexes
  let curArr // Iterator over the array indexes
  while (curArr = rReg.exec(curFull)) {
    if (!Array.isArray(o[cur])) {
      o[cur] = []
    }
    // Advance o to the array, cur to the array index
    o = o[cur]
    cur = curArr[1]
  }
  if (!remaining) {
    // At destination, set value
    o[cur] = value
  } else {
    // We're going deeper, create an object to traverse into
    if (!o[cur]) o[cur] = {}
    // Recurse with next step in dot-notation
    set(o[cur], remaining, value)
  }
}

module.exports = set
