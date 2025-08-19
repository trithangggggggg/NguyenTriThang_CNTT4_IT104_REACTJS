import React from "react";

export default function Calculation() {
  const a: number = 10;
  const b: number = 10;

  const add = (x: number, y: number): number => x + y;
  const subtract = (x: number, y: number): number => x - y;
  const multiply = (x: number, y: number): number => x * y;
  const divide = (x: number, y: number): number => x / y;

  return (
    <div>
      <h1>Danh sách kết quả</h1>
      <ul>
        <li>{`${a} + ${b} = ${add(a, b)}`}</li>
        <li>{`${a} - ${b} = ${subtract(a, b)}`}</li>
        <li>{`${a} * ${b} = ${multiply(a, b)}`}</li>
        <li>{`${a} / ${b} = ${divide(a, b)}`}</li>
      </ul>
    </div>
  );
}
