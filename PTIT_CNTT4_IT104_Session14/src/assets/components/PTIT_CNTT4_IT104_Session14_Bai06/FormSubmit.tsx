import React, { Component } from "react";

type State = {
  gender: string;
};

export default class FormSubmit extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: "",
    };
  }

  // Khi chọn radio
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  // Khi submit form
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // chặn reload trang
    if (this.state.gender) {
      console.log("Giới tính bạn chọn là: " + this.state.gender);
      
    } else {
      console.log("Bạn chưa chọn giới tính ");
    }
  };

  render() {
    return (
      <div className="bai6">
        <h1>Bai6: </h1>
        <form className="container" onSubmit={this.handleSubmit}>
          <h4>Giới tính:</h4>

          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={this.state.gender === "Nam"}
            onChange={this.handleChange}
          />{" "}
          Nam <br />

          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={this.state.gender === "Nữ"}
            onChange={this.handleChange}
          />{" "}
          Nữ <br />

          <input
            type="radio"
            name="gender"
            value="Khác"
            checked={this.state.gender === "Khác"}
            onChange={this.handleChange}
          />{" "}
          Khác <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
