type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
};

function getFinalPrice(product: Product): number {
  if (product.discount !== undefined && product.discount > 0) {
    return product.price * (1 - product.discount / 100);
  }
  return product.price;
}

function printProductInfo(product: Product): void {
  const finalPrice = getFinalPrice(product);
  console.log(`Product Info:
  - ID: ${product.id}
  - Name: ${product.name}
  - Price: $${product.price.toFixed(2)}
  - Category: ${product.category.name}
  - Discount: ${product.discount !== undefined ? product.discount + "%" : "No discount"}
  - Final Price: $${finalPrice.toFixed(2)}
`);
}

const listProduct: Product[] = [
  {
    id: "P001",
    name: "Laptop Dell XPS 15",
    price: 1500,
    category: {
      id: "C01",
      name: "Electronics",
    },
    discount: 10,
  },
  {
    id: "P002",
    name: "Sach 'Dac nhan tam'",
    price: 25,
    category: {
      id: "C02",
      name: "Books",
    },
  },
  {
    id: "P003",
    name: "Ban phim co logitech",
    price: 120,
    category: {
      id: "C01",
      name: "Electronics",
    },
    discount: 5,
  },
];

console.log("Danh sach san pham ");
listProduct.forEach((product) => {
  printProductInfo(product);
});