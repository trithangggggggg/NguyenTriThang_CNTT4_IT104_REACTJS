import React, { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [visibility, setVisibility] = useState<{ name: string; email: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVisibility({ name, email });
  };

  return (
    <div>
      <h3>Thông tin người dùng</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={name}
          placeholder="Họ và tên.."
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Nhập email"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" style={{ background: "green", color: "white" }}>
          Gửi
        </button>
        <br />
        <br />
        <div style={{ display: `${visibility ? "block" : "none" } `, backgroundColor:'blue', color:'white'}}>
            <div>Ten : {name}</div>
            <div>email: {email}</div>
        </div>
      </form>
    </div>
  );
}
