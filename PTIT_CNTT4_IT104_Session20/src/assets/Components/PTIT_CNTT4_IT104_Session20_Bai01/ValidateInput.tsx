import React, { useState } from "react";

export default function ValidateInput() {
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");



    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const valueText =  e.target.value;
        setText(valueText);
        if(valueText.length < 5){
            setMessage("Nhap chuoi dai hon 5 ki tu!!!");
        }else{
            setMessage("");
        }
    }

  return (
    <div>
      <div style={{ padding: 20 }}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Nhập chuỗi..."
          style={{ padding: 5 }}
        />
        {message && <p style={{ color: "red" }}>{message}</p>}
      </div>
    </div>
  );
}
