function reverseArray(array) {
    let reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i]);
    }
    return reverse;
}
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));
