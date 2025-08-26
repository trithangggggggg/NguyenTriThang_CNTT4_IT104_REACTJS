import React, { Component } from "react";
import CartIcon from "./CartIcon";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="#">Trang chủ</a>
          <a href="#">Danh sách sản phẩm</a>
          <CartIcon />
        </nav>
      </div>
    );
  }
}
