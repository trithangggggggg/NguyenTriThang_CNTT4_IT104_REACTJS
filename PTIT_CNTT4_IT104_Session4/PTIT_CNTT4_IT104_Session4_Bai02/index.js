"use strict";
let str = [6, 5, 7, 4, 7, 8, 9, 3, 5.6];
function tbc(score) {
    if (score.length == 0) {
        return 0;
    }
    const sum = score.reduce((total, current) => total + current, 0);
    return sum / score.length;
}
const result = tbc(str);
console.log("result: ", result);
