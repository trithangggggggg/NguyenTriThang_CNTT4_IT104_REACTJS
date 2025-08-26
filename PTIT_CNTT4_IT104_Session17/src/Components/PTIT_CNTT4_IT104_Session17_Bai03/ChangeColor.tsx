import React, { useState } from 'react'

export default function ChangeColor() {


    const [color, setColor] = useState<"black"|"red">("black");
    const handleClick = ()=>{
        setColor(pre =>(pre == "black"? "red" : "black"));
    }
  return (
    <div className='bai3'>   
         <h3 style={{color}}>Đây là màu gì ?</h3>
         <button onClick={handleClick}>Thay đổi màu</button>
    </div>  
  )
}
