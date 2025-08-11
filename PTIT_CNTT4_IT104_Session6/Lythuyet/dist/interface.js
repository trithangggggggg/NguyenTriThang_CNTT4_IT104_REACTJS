// interface 
class A {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        return `Product name: ${this.name}, Price: ${this.price}`;
    }
}
