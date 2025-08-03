function mergeSortedArrays(arr1, arr2) {
  const result = []
  let i = 0, j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  result.push(...arr1.slice(i))
  result.push(...arr2.slice(j))

  return result
}


const a = [1, 2, 3, 9, 5]
const b = [6, 4, 7, 8]

console.log(mergeSortedArrays(a, b))

