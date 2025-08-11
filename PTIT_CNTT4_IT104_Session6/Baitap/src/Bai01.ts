abstract class Shape {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  abstract getSize(): void;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }

  getSize(): void {
    console.log(`Kích thước hình chữ nhật ${this.name}:`);
    console.log(`  Chiều rộng: ${this.width}`);
    console.log(`  Chiều cao: ${this.height}`);
  }
}

const rectangle = new Rectangle("Hình chữ nhật A", 10, 5);
console.log(rectangle.getName());
rectangle.getSize();