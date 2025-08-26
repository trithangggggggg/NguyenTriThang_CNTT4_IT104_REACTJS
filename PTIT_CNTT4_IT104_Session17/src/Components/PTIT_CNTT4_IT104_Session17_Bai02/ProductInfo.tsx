import React, { useState } from 'react'

export default function ProductInfo() {
    const [product, setProduct] = useState({
        id:1, 
        name: "Coca Cola",
        price: "1000$",
        quantity: 10,
    });
  return (
    <div className='bai2'>
        <h3>Thông tin sản phẩm </h3>
        <p>Id: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>

    </div>
  )
}
