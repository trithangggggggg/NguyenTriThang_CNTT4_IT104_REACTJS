function insertArray(arr1, arr2, index) {
  if (index < 0 || index > arr1.length) {
    console.log("Vi tri khong hople ")
    return
  }

  const result = [
    ...arr1.slice(0, index),
    ...arr2,
    ...arr1.slice(index)
  ]
  console.log(result)
}

insertArray([1, 2, 3, 7, 8], [4, 5, 6], 3)

