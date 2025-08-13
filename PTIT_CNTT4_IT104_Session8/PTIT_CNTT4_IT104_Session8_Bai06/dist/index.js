function findElement(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr[i];
        }
    }
    return undefined;
}
const numbers = [1, 2, 4, 6, 7, 8];
const string = ["hello", " wprld ", "undefined"];
console.log(findElement(numbers, 2));
console.log(findElement(string, "undefined"));
