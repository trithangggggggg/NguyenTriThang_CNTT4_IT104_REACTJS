import React, { Component } from 'react'

type Props = {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default class ProductCard extends Component<Props> {
  handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item: any) => item.id === this.props.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...this.props, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
  }

  render() {
    const { name, price, image } = this.props;
    return (
      <div className="product-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
        <button onClick={this.handleAddToCart}>Thêm vào giỏ hàng</button>
      </div>
    )
  }
}
