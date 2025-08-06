let str:string = "undefined";

let result:string[] = [];

for (let i = 0; i < str.length; i++) {
    let char= str[i] as string;
    if(result.indexOf(char) === -1){
        result.push(char);
    }
}
console.log(result);
