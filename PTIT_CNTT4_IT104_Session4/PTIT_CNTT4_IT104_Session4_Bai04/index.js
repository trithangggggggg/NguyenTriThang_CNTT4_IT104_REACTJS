"use strict";
function handleUnionType(input) {
    if (typeof input === 'string') {
        console.log(`${input} co ${input.length} ki tu`);
    }
    else if (typeof input === 'number') {
        if (input % 2 == 0) {
            console.log(`Day la so chan`);
        }
        else {
            console.log(`Day la so le`);
        }
    }
}
handleUnionType("undefined");
handleUnionType(5);
handleUnionType(10);
