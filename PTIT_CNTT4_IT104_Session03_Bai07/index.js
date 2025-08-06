"use strict";
let str = "undefined";
let result = [];
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (result.indexOf(char) === -1) {
        result.push(char);
    }
}
console.log(result);
