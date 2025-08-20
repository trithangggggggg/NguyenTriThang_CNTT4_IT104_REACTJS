import React, { Component } from 'react'

export default class Exercises02 extends Component {
    State = {
        id: 1,
        name: "Nguyễn Trí Thắng",
        birdday: "02/02/2006",
        address: "Hai Duong"
    }
  render() {
    return (
      <div>
            <h2>Thông tin cá nhân </h2>
            <p>Id: {this.State.id}</p>
            <p>Tên: {this.State.name}</p>
            <p>Ngày sinh: {this.State.birdday}</p>
            <p>Địa chỉ: {this.State.address}</p>
      </div>
    )
  }
}
