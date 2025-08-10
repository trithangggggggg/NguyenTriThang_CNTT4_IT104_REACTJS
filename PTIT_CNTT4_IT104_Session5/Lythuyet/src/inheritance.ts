



// TÍNH KẾ THỪA 


// 1 CLASS con khi kế thừa class cha thì sé có các thuộc tính và phương thức của class cha \

class Animal{
    private name:string;
    constructor(name:string){
        this.name = name;
    }
    sound():string{
        return `tieng keu cua ${this.name}`;
    }
}

class Dog extends Animal{
}
class Cat extends Animal{

}
const dog1 = new Dog('Minh');
const dog2 = new Dog("Loc");
// const cat1 = new Cat('Hai');



console.log(dog1.sound());
console.log(dog2.sound());
// console.log(cat1.sounds());


