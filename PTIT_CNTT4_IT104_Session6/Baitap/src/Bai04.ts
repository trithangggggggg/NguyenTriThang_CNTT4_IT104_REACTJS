interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 7);

console.log(
    `Circle -> Area: ${circle.calculateArea().toFixed(2)}, Perimeter: ${circle.calculatePerimeter().toFixed(2)}`
);

console.log(
    `Rectangle -> Area: ${rectangle.calculateArea().toFixed(2)}, Perimeter: ${rectangle.calculatePerimeter().toFixed(2)}`
);
