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

module.exports = flatten
