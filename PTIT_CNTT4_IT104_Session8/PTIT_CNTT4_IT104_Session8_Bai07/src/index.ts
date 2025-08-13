function flatten<T>(arr: T[][]): T[] {
    const result: T[] = [];
    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }
    return result;
}

const numbers = [[1, 2], [3, 4], [5]];
const  word = [["a", "b"], ["c", "d"]];

console.log(flatten(numbers));
console.log(flatten(word)); 


