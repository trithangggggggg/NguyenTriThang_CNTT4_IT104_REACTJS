import React, { Component } from 'react'

export default class Exercises01 extends Component {
    state = {
        name: "Nguyễn Trí Thắng "
    }
  render() {
    return (
      <div>
            <h1>{this.state.name}</h1>
      </div>
    )
  }
}
