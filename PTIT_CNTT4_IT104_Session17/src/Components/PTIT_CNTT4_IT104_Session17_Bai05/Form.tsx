import React, { useState } from 'react'

export default function Form() {
    const [value, setValue] = useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }
  return (
    <div className='bai5'>
        <input type="text" placeholder='   Nhập nội dung  '
        onChange={handleChange}/>
        <h2>{value}</h2>
    </div>
  )
}
