class Animal {
    constructor(name) {
        this.name = name;
    }
    makeNoise() {
        return "Animal makes a noise";
    }
    printName() {
        return `The animal name :  ${this.name}`;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        return `Con Mèo ${this.name} kêu Mèo méo meo mèo meo`;
    }
    printName() {
        return `Con mào này tên  ${this.name}`;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        return `Con Chó ${this.name} keu Gau gau gau gau gau `;
    }
    printName() {
        return `Con Chó tên ${this.name}`;
    }
}
const phamloc = new Dog("Pham Loc");
console.log(phamloc.makeNoise());
console.log(phamloc.printName());
const tuanminh = new Cat("Tuan Minh");
console.log(tuanminh.makeNoise());
console.log(tuanminh.printName());
