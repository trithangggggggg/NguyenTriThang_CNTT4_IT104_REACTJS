import React, { Component } from "react";

type User = {
  name: string;
  email: string;
  age: string;
};

type State = {
  user: User;
  error: string;
  message: string;
};

export default class UserForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: { name: "", email: "", age: "" },
      error: "",
      message: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, age } = this.state.user;

    if (!name || !email || !age) {
      this.setState({ error: "Vui lòng nhập đầy đủ thông tin!", message: "" });
      return;
    }

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", message: "" });
      return;
    }

    if (Number(age) < 0) {
      this.setState({ error: "Tuổi không được âm", message: "" });
      return;
    }

    this.setState({
      error: "",
      message: `Họ tên: ${name} \nEmail: ${email} \nTuổi: ${age}`,
    });
  };

  handleClickDelete = () => {
    this.setState({
      user: { name: "", email: "", age: "" },
      error: "",
    });
  };

  render() {
    return (
      <div className="bai5">
        <form onSubmit={this.handleSubmit}>
          <h2>Nhập thông tin người dùng</h2>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={this.state.user.name}
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="age"
            placeholder="tuổi"
            value={this.state.user.age}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit"> Gửi</button> &nbsp;{" "}
          <button type="button" onClick={this.handleClickDelete}>
            Xóa tất cả{" "}
          </button>
        </form>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        {this.state.message && <pre>{this.state.message}</pre>}
      </div>
    );
  }
}


