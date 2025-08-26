import React, { Component } from 'react'

export default class CartIcon extends Component {
  render() {
    return (
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">3</span>
      </div>
    )
  }
}
