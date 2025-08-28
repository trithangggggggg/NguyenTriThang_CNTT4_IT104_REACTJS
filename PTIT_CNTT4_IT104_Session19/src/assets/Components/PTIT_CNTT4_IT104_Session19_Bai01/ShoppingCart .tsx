import React, { useMemo } from "react";

type Cart = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function ShoppingCart() {
  const CartShopping: Cart[] = [
    { id: 1, name: "minh", price: 12000, quantity: 1 },
    { id: 2, name: "thang", price: 12000000000, quantity: 1 },
    { id: 3, name: "tien", price: 10000, quantity: 1 },
    { id: 4, name: "loc", price: 13000, quantity: 1 },
  ];


  const total = useMemo(() => {
    return CartShopping.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [CartShopping]);

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {CartShopping.length === 0 ? (
        <p>Giỏ hàng đang trống.</p>
      ) : (
        <ul>
          {CartShopping.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity}) - {item.price * item.quantity}₫
            </li>
          ))}
        </ul>
      )}

      <p>Tổng: {total}₫</p>
    </div>
  );
}
