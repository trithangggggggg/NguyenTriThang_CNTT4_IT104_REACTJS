import React, { useState } from "react";

export default function ResetName() {
  const [name, setName] = useState("Nguyễn Trí Thắng");

  return (
    <div className="bai1">
      <h2>Xin chào, {name}!</h2>
      <button onClick={() => setName("Thắng Nguyễn")}> Đổi sang tên khác </button>
    </div>
  );
}
