import React, { useState } from 'react'

export default function HideShow() {
    const [Show, setShow] = useState(true);

    const handleClick = ()=>{
        setShow(prev => !prev);
    };

  return (
    <div className='bai4'>   
        <p>{Show ? "Tôi là Undefined" : ""}</p>
        <button onClick={handleClick}>{Show? "Ẩn" : "Hiện" }</button>
    </div>
  )
}
