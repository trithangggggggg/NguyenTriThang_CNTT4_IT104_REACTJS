import React, { useCallback, useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log( formData);
      
    },
    [formData]
  );
  return (
    <div className="css">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email: </label>
        <br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="aaa@gmail.com"
        />
        <br />
        <label htmlFor="">Password: </label>
        <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="nhap mat khau"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
