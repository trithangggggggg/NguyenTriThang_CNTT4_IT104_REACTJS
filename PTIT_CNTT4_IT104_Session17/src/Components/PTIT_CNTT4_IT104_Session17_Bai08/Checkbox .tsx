import React, { useState } from "react";

export default function Checkbox() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.checked) {
      setSelected((prev) => [...prev, value]);
    } else {
      setSelected((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <div className="bai7">
      <h2>Sở thích: {selected.join(", ")}</h2>

      <input type="checkbox" value="Đi chơi" onChange={handleChange} /> Đi chơi <br />
      <input type="checkbox" value="Đi ngủ" onChange={handleChange} /> Đi ngủ <br />
      <input type="checkbox" value="Chơi game" onChange={handleChange} /> Chơi game <br />
      <input type="checkbox" value="Hẹn hò" onChange={handleChange} /> Hẹn hò <br />
      <input type="checkbox" value="Ăn" onChange={handleChange} /> Ăn <br />
      <input type="checkbox" value="Code..." onChange={handleChange} /> Code... <br />
    </div>
  );
}
