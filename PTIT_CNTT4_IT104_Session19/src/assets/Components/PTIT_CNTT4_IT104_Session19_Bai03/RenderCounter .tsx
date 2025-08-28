import React, { useRef, useState } from 'react';

export default function RenderCounter() {
  const [inputValue, setInputValue] = useState('');
  const ref = useRef(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    ref.current++;
  };

  return (
    <div>
      <input value={inputValue} type="text" onChange={handleChange} placeholder='nhập...' />
      <p>Component đã render : {ref.current} lần </p>
    </div>
  );
}
