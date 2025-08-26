import React, { useState } from "react";

export default function CounText() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const countChar = (input: string): number => {
    return input.length;
  };

  return (
    <div className="bai6">
      <h2>Count Text: {countChar(text)}</h2>
      <h2>Nội dung: {text}</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản"
      />
    </div>
  );
}
