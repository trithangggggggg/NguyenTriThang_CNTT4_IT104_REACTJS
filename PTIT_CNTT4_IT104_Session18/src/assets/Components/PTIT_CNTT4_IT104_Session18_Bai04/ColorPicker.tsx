import React, { useCallback, useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("black");

  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div>
      <label>Màu người dùng chọn: </label>
      <input
        type="color"
        value={color}
        onChange={handleChangeColor}
        style={{ marginLeft: "8px" }}
      />
      <br />
      <label>Màu hiển thị: </label>
      <div
        style={{
          width: "100px",
          height: "50px",
          backgroundColor: color,
          marginTop: "8px",
        }}
      ></div>
    </div>
  );
}
