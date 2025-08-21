import React, { Component } from "react";

type Product = {
  productCode: string;
  productName: string;
  price: string;
  quantity: string;
};

type State = {
  product: Product;
};

export default class Form extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        productCode: "",
        productName: "",
        price: "",
        quantity: "",
      },
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      product: {
        ...this.state.product,
        [name]: value,
      },
    });
  };

  handleClick = () => {
    console.log("Sản phẩm:", this.state.product);
    // reset sau khi click
    this.setState({
      product: {
        productCode: "",
        productName: "",
        price: "",
        quantity: "",
      },
    });
  };

  render() {
    return (
      <div className="bai5">
        <h1>Bai5</h1>
        <div className="container">
          <h1>Them moi san pham</h1>
          <label>Ma san pham</label>
          <br />
          <input
            type="text"
            placeholder="SP001"
            name="productCode"
            value={this.state.product.productCode}
            onChange={this.handleChange}
          />
          <br />

          <label>Ten san pham</label>
          <br />
          <input
            type="text"
            placeholder="Cam da xanh"
            name="productName"
            value={this.state.product.productName}
            onChange={this.handleChange}
          />
          <br />

          <label>Gia</label>
          <br />
          <input
            type="text"
            placeholder="200000"
            name="price"
            value={this.state.product.price}
            onChange={this.handleChange}
          />
          <br />

          <label>So luong</label>
          <br />
          <input
            type="number"
            placeholder="10"
            name="quantity"
            value={this.state.product.quantity}
            onChange={this.handleChange}
          />
          <br />

          <button className="regiter" onClick={this.handleClick}>
            Dang ki
          </button>
        </div>
        <hr />
      </div>
    );
  }
}
