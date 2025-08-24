import React, { Component } from "react";

type State = {
  birdday: string;
  submitBirdday: string;
};

export default class BirdDay extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      birdday: "",
      submitBirdday: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      birdday: e.target.value,
    });
  };

  handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({submitBirdday: this.state.birdday})
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Bai 3</h1>
          <label htmlFor="">Ngày Sinh: 
            <b>{this.state.submitBirdday ? this.state.submitBirdday : ""}</b>
          </label>
          <br />
          <input type="date" 
          value={this.state.birdday}
          onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <hr />  
      </div>
    );
  }
}
