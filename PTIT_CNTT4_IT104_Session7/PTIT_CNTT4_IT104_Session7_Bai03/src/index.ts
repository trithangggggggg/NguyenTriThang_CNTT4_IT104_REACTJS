abstract class Animal{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    makeNoise():string{
        return "Animal makes a noise";
    }
    printName():string{
        return `The animal name :  ${this.name}`;
    }
}


class Cat extends Animal{
    constructor(name:string){
        super(name);
    }
    makeNoise(): string {
        return `Con Mèo ${this.name} kêu Mèo méo meo mèo meo`;
    }
    printName(): string {
        return `Con mào này tên  ${this.name}`;
    }
}



class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    makeNoise(): string {
        return `Con Chó ${this.name} keu Gau gau gau gau gau `;
    }
    printName(): string {
        return `Con Chó tên ${this.name}`;
    }
}


const phamloc = new Dog ("Pham Loc");
console.log(phamloc.makeNoise());
console.log(phamloc.printName());



const tuanminh = new Cat ("Tuan Minh");
console.log(tuanminh.makeNoise());
console.log(tuanminh.printName());







