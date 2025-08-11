//taoabstract class animal
class Animal {
    constructor(name, age, category) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    //phuong thuc
    sound() {
        return `Animal ${this.name} sound: ${this.category} animal sound`;
    }
    getDetails() {
        return `Animal ${this.name} age: ${this.age} category: ${this.category}`;
    }
    move() {
        return `Animal ${this.name} move: ${this.category} animal move`;
    }
    feed() {
        return `Animal ${this.name} feed: ${this.category} animal feed`;
    }
}
class Mammal extends Animal {
    constructor(name, age, furColor) {
        super(name, age, furColor);
        this.name = name;
        this.age = age;
        this.furColor = furColor;
    }
    move() {
        return `phuong thuc di chuyern cua dong vat co vu`;
    }
    getfurColor() {
        //lay mau long dong vat co vu
        return `mau long cua loai:${this.name} la ${this.furColor}`;
    }
}
class Bird extends Animal {
    constructor(name, age, wingSpan) {
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move() {
        return `phuong thuc di chuyen cua peter`;
    }
    getwingSpan() {
        //lay thong tin sai sach cua loai peter
        return `sai canh cua loai peter:${this.name} dai ${this.wingSpan}cm`;
    }
}
class Reptile extends Animal {
    constructor(name, age, venomous) {
        super(name, age, venomous);
        this.name = name;
        this.age = age;
        this.venomous = venomous;
    }
    move() {
        return `phuong thuc di chuyen cua loai bo sat`;
    }
    getvenomous() {
        //lay thong tin dong vat bo sat co doc khong
        return `loai bo sat: ${this.name} co doc khong: ${this.venomous}`;
    }
}
const animal = [
    new Mammal("ran", 10, "do"),
    new Bird("peterpeter", 10, 5),
    new Reptile("blue", 2, true),
];
animal.forEach(item => {
    console.log(item.move());
});
const tuanminh = new Bird("peter", 19, 5);
const phamloc = new Reptile("Loc ran", 2, true);
console.log(tuanminh.getwingSpan());
console.log(phamloc.getvenomous());
