function findFirtSoChan<T>(array:T[] ):T | undefined{
    for (const element of array) {
    if (typeof element === 'number' && (element as number) % 2 === 0) {
      return element;
    }
  }
  return undefined;
}


const number1 = [1,3, ,5 ,77 ,7, 8];
const sochan = findFirtSoChan(number1);
console.log(sochan);


