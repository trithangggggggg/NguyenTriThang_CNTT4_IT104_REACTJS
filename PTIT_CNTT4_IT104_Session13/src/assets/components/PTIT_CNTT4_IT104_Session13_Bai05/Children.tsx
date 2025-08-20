import React, { Component } from 'react'

interface Product{
    id:number,
    name:string,
    price:number,
    quantity:number,
}

interface ChildrenProps{
    product: Product
}

export default class Children extends Component <ChildrenProps, unknown>{
  render() {
    const {id, name, price, quantity} = this.props.product;
    return (
      <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
      </div>
    )
  }
}
