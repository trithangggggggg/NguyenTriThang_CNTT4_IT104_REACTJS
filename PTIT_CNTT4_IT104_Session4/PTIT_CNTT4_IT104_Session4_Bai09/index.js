"use strict";
function calculateInvoiceTotal(invoice) {
    return invoice.orders
        .filter(order => order.isPaid)
        .reduce((total, order) => {
        return total + order.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }, 0);
}
function getUnpaidOrders(invoice) {
    return invoice.orders.filter(order => order.isPaid);
}
function printInvoice(invoice) {
    console.log(`HÓA ĐƠN: #${invoice.invoiceId} - Ngày tạo: ${invoice.createdAt.toISOString().split('T')[0]}`);
    console.log('------------------------------');
    let grandTotal = 0;
    for (const order of invoice.orders) {
        console.log(`\nĐƠN HÀNG: #${order.orderId} - ${order.customerName}`);
        let orderTotal = 0;
        for (const item of order.items) {
            const price = item.product.price * item.quantity;
            orderTotal += price;
            const note = item.note ? ` (note: ${item.note})` : '';
            console.log(`- ${item.product.name} × ${item.quantity} → ${price.toLocaleString('vi-VN')} VND${note}`);
        }
        console.log(`Tổng đơn: ${orderTotal.toLocaleString('vi-VN')} VND`);
        console.log(`Trạng thái: ${order.isPaid ? 'ĐÃ THANH TOÁN' : 'CHƯA THANH TOÁN'}`);
    }
    console.log(`\n>> Tổng cộng hóa đơn: ${grandTotal.toLocaleString('vi-VN')} VND`);
}
const invoice = {
    invoiceId: "HD001",
    createdAt: new Date(),
    orders: [
        {
            orderId: "OD01",
            customerName: "Nguyen Tuan Minh",
            deliveryAddress: "2 Ao sen",
            isPaid: true,
            items: [
                { product: { id: "P01", name: "Ca phe", price: 20000 }, quantity: 2 },
                { product: { id: "P02", name: "Tra sua", price: 30000 }, quantity: 1, note: "Khong duong" }
            ]
        },
        {
            orderId: "OD02",
            customerName: "Tran Thi B",
            deliveryAddress: "456 Nguyen Trai",
            isPaid: false,
            items: [
                { product: { id: "P03", name: "Banh mi", price: 15000 }, quantity: 3 }
            ]
        }
    ]
};
printInvoice(invoice);
