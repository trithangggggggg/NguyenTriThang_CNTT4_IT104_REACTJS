class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Kích thước hình chữ nhật ${this.name}:`);
        console.log(`  Chiều rộng: ${this.width}`);
        console.log(`  Chiều cao: ${this.height}`);
    }
}
const rectangle = new Rectangle("Hình chữ nhật A", 10, 5);
console.log(rectangle.getName());
rectangle.getSize();
