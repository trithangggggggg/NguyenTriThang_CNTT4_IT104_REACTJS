class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    rectangleS() {
        return `hinh chu nhat co dien tich la ${this.width * this.height}`;
    }
    rectangleV() {
        return `hinh chu nhat co chu vi la ${(this.width + this.height) * 2}`;
    }
    getWidth() {
        return `hinh chu nhat co chieu rong la ${this.width}`;
    }
    getHeight() {
        return `hinh chu nhat co chieu dai la ${this.height}`;
    }
    setWidth(newWidth) {
        this.width = newWidth;
    }
    setHeight(newHeight) {
        this.height = newHeight;
    }
}
const hcn = new Rectangle(10, 20);
console.log(hcn.getWidth());
console.log(hcn.getHeight());
console.log(hcn.rectangleV());
console.log(hcn.rectangleS());
hcn.setWidth(20);
hcn.setHeight(30);
console.log(hcn.rectangleV());
console.log(hcn.rectangleS());
