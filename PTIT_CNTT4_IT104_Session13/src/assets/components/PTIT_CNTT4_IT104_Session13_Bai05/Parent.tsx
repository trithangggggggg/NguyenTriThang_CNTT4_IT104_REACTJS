import React, { Component } from 'react';
import Children from './Children';
type Props = unknown;

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default class Parent extends Component<Props, Product> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: 1,
      name: "Buoi 5 roi",
      price: 20000,
      quantity: 20,
    };
  }

  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <Children product={this.state} />
      </div>
    );
  }
}
