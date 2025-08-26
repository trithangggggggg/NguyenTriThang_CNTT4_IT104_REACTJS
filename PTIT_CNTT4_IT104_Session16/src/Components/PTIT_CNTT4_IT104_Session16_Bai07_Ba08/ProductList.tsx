import React, { Component } from "react";
import ProductCard from "./ProductCard";

export default class ProductList extends Component {
  render() {
    const products = [
      {
        id: 1,
        name: "Iphone 8 promax",
        price: "20.000.000đ",
        image:
          "https://www.didongmy.com/vnt_upload/product/01_2025/thumbs/600_iphone-17-128gb-didongmy-thumb-600x600.jpg",
      },
      {
        id:2,
        name: "Iphone x promax",
        price: "20.000.000đ",
        image:
          "https://www.didongmy.com/vnt_upload/product/01_2025/thumbs/600_iphone-17-128gb-didongmy-thumb-600x600.jpg",
      },
      {
        id:3,
        name: "Iphone 11 promax",
        price: "20.000.000đ",
        image:
          "https://www.didongmy.com/vnt_upload/product/01_2025/thumbs/600_iphone-17-128gb-didongmy-thumb-600x600.jpg",
      },
      {
        id:4,
        name: "Iphone 12 promax",
        price: "20.000.000đ",
        image:
          "https://www.didongmy.com/vnt_upload/product/01_2025/thumbs/600_iphone-17-128gb-didongmy-thumb-600x600.jpg",
      },
      {
        id:5,
        name: "Iphone 13 promax",
        price: "20.000.000đ",
        image:
          "https://www.didongmy.com/vnt_upload/product/01_2025/thumbs/600_iphone-17-128gb-didongmy-thumb-600x600.jpg",
      },
      {
        id:6,
        name: "Iphone 14 promax",
        price: "20.000.000đ",
        image:
          "https://www.didongmy.com/vnt_upload/product/01_2025/thumbs/600_iphone-17-128gb-didongmy-thumb-600x600.jpg",
      },
      {
        id:7,
        name: "Iphone 15 promax",
        price: "20.000.000đ",
        image:
          "https://www.didongmy.com/vnt_upload/product/01_2025/thumbs/600_iphone-17-128gb-didongmy-thumb-600x600.jpg",
      },
      {
        id:8,
        name: "Iphone 16 promax",
        price: "20.000.000đ",
        image:
          "https://www.didongmy.com/vnt_upload/product/01_2025/thumbs/600_iphone-17-128gb-didongmy-thumb-600x600.jpg",
      },
    ];
    return (
      <main className="product-list">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </main>
    );
  }
}
