"use strict";
function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    order.items.forEach(item => {
        const name = item.product.name;
        const qty = item.quantity;
        const total = item.product.price * qty;
        console.log(`- ${name} × ${qty} → ${total.toLocaleString()} VND`);
    });
    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total.toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
const product1 = { id: "p1", name: "Áo sơ mi", price: 250000 };
const product2 = { id: "p2", name: "Quần tây", price: 400000 };
const order = {
    orderId: "ORD001",
    customerName: "undefined",
    items: [
        { product: product1, quantity: 2 },
        { product: product2, quantity: 1 }
    ],
    note: "Giao sau 18h"
};
printOrder(order);
