import React, { Component } from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'

export default class Main extends Component {
  render() {
    return (
      <div className="bai7">
        <Navbar />
        <ProductList />
      </div>
    )
  }
}
