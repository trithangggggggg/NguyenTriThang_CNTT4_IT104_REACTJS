import React, { Component } from "react";

type State = {
  email: string;
};

export default class Form extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email: this.state.email });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Bai 1 </h1>
          <h3>FORM</h3>
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="nva@gmail.com"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <hr />
      </div>
    );
  }
}
