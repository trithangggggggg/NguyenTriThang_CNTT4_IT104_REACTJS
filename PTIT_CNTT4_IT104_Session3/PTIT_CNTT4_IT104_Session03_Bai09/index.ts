function toNumber(value: string): number | null {
  const num = Number(value);
  return isNaN(num) ? null : num;
}

function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number | string {
  if (b === 0) return "Khong the chia cho 0";
  return a / b;
}
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}
function sqrt(base: number, root: number): number {
  return Math.pow(base, 1 / root);
}
function factorial(n: number): number | string {
  if (n < 0 || !Number.isInteger(n)) return "Chi tinh giai thua cho so nguyen khong am";
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function handleClick(operator: string) {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value;
  const input2 = (document.getElementById("input2") as HTMLInputElement).value;
  const resultDiv = document.getElementById("result")!;

  const num1 = toNumber(input1);
  const num2 = toNumber(input2);

  if (operator === "!") {
    if (num1 === null) {
      resultDiv.innerText = "Gia tri khong hop le cho giai thua.";
      return;
    }
    resultDiv.innerText = `Ket qua: ${factorial(num1)}`;
    return;
  }

  if (num1 === null || num2 === null) {
    resultDiv.innerText = "Du lieu khong hop le.";
    return;
  }

  let result: number | string;

  switch (operator) {
    case "+": result = add(num1, num2); break;
    case "-": result = subtract(num1, num2); break;
    case "*": result = multiply(num1, num2); break;
    case "/": result = divide(num1, num2); break;
    case "^": result = power(num1, num2); break;
    case "√": result = sqrt(num1, num2); break;
    default: result = "Phep toan khong hop le";
  }

  resultDiv.innerText = `Ket qua: ${result}`;
}
