"use strict";
function toNumber(num) {
    const converted = Number(num);
    return isNaN(converted) ? null : converted;
}
function calculate(a, b, choice) {
    switch (choice) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                console.log("ko the chia cho 0 ");
                return null;
            }
            return a / b;
        default:
            console.log("khong hop le");
            return null;
    }
}
let a = prompt("enter a: ");
let b = prompt("enter b: ");
let choice = prompt("nhap cong tru nhan chia  (+, -, *, /):");
if (a !== null && b !== null && choice !== null) {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) {
        console.log("khong hop le");
    }
    else {
        const result = calculate(numA, numB, choice);
        if (result !== null) {
            console.log("dap an:", result);
        }
    }
}
else {
    console.log("chua nhap du lieu");
}
