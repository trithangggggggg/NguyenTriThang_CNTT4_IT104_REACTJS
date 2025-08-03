const sumArrays = (...arrays) => {
  return arrays.map(arr => arr.reduce((sum, num) => sum + num, 0))
}
console.log(sumArrays([1, 54], [22, 33], [432, 567]));
2