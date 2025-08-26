import React, { useState } from "react";

export default function Select() {
  const [city, setCity] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="bai7">
      <select value={city} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hải Phòng">Hải Phòng</option>
        <option value="Đà Nẵng">Đà Nẵng</option>
        <option value="Huế">Huế</option>
      </select>

      {city && (
        <p>Thành phố: <strong>{city}</strong></p>
      )}
    </div>
  );
}
