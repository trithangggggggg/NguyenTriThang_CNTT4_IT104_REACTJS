import React, { useState } from "react";

type State={
  name:string;
  email:string;
};


export default function UserForm() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    setName(e.target.value);
  }

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setEmail(e.target.value);
  }

  return (
    <div style={{width:"300px", backgroundColor:"whitesmoke", borderRadius:"4px"}}>
      <h2 style={{textAlign:"center"}}>User Infomation Form</h2>
      <div style={{ paddingLeft:"30px"}}>
        <label htmlFor=""> Tên: </label><br />
        <input type="text" name="" id="" onChange={handleNameChange} /><br />
        <label htmlFor="">Email: </label><br />
        <input type="" name='' id='' onChange={handleEmailChange} /><br />
      </div>
      <div style={{backgroundColor:"AliceBlue",  }}>
        <h3>Thông tin người dùng: </h3>
        <span style={{color:'blue' , marginLeft:"20px"}}>Tên: </span> <span>{name ? name: "(Chưa nhập)"}</span><br />
        <span style={{color: "blue", marginLeft:"20px", }}>Email: </span><span>{email ? email : "(Chưa nhập)"}</span>
      </div>
    </div>
  );
}
