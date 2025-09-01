import React, { useEffect } from 'react'

export default function PageTitle() {
    useEffect(()=>{
        const tentrang:any = prompt("Chao mung ban den voi binh nguyen vo tan");
        document.title = tentrang;
    },[]
    )
  return (
    <div>
            {/* <h2>Chao mung den voi binh nguyen vo tan</h2>
            <input type="text" placeholder='Nhao ten cua ban ' onChange={(e)=>setTitle(e.target.value)} /> */}
            <p>đã cap nhật tên trang</p>
    </div>
  )
}
