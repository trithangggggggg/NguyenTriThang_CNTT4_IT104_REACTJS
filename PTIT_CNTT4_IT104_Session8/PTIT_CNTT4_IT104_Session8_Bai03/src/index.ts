function  reverseArray<T>(array:T[]):T[] {
     let reverse:T[] = [];
     for(let i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i]);
     }
     return reverse;
}

console.log(reverseArray<number>([1, 2, 3, 4]));
console.log(reverseArray<string>(["a", "b", "c"]));


