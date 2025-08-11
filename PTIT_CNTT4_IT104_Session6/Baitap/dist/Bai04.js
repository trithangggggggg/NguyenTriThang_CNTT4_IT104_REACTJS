class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 7);
console.log(`Circle -> Area: ${circle.calculateArea().toFixed(2)}, Perimeter: ${circle.calculatePerimeter().toFixed(2)}`);
console.log(`Rectangle -> Area: ${rectangle.calculateArea().toFixed(2)}, Perimeter: ${rectangle.calculatePerimeter().toFixed(2)}`);
