/**
 * Flatten function implementation
 * @param {Array} arr - array to flatten
 * @param {Array} result - array to aggregate result (the same array passed to each recursive call)
 * @returns {Array}
 */
const flatten = (arr, result = []) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('flatten accepts only array as an argument')
  }

  if(arr.length){
    arr.forEach(elem => {
      Array.isArray(elem) ? flatten(elem, result) : result.push(elem)
    })
  }

  return result;
}

/**
 * @module flatten
 * @type {function()}
 */
module.exports = flatten
