function processInput(input: string | number | boolean): void {
  if (typeof input === "string") {
    const num = Number(input);
    if (!isNaN(num) && num.toString() === input) {
      console.log(num * num);
    } else {
      const letters = input.match(/[a-zA-Z]/g);
      const count = letters ? letters.length : 0;
      console.log(`${count} ky tu chu cai`);
    }
  } else if (typeof input === "number") {
    if (isPrime(input)) {
      console.log("La so nguyen to");
    } else {
      console.log("Khong phai so nguyen to");
    }
  } else if (typeof input === "boolean") {
    if (input) {
      console.log("Gia tri la true - tien hanh xu ly");
    } else {
      console.log("Gia tri la false - dung xu ly");
    }
  }
}

function isPrime(n: number): boolean {
  if (n < 2 || n % 1 !== 0) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}


processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);