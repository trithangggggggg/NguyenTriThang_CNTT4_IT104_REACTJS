

//tao interface Animal
interface IAnimal{
    //thuoc tinh
    name:string;
    age:number;
    category:string|number|boolean;
    //phuong thuc
    sound():string;
    getDetails():string;
    move():string;
    feed():string;
}



//taoabstract class animal
abstract class Animal implements IAnimal{
    name:string;
    age:number;
    category:string|number|boolean;
    constructor(name:string,age:number,category:string|number|boolean){
        this.name=name; 
        this.age =age;
        this.category=category;
    }
    //phuong thuc
    sound():string{
        return `Animal ${this.name} sound: ${this.category} animal sound`;
    }
    getDetails():string{
        return `Animal ${this.name} age: ${this.age} category: ${this.category}`
    }
    move():string{
        return `Animal ${this.name} move: ${this.category} animal move`
    }
    feed():string{
        return `Animal ${this.name} feed: ${this.category} animal feed`
    }
}


class Mammal extends Animal{
    private furColor:string;
    constructor(name:string,age:number,furColor:string){
        super(name,age,furColor);
        this.name=name;
        this.age=age;
        this.furColor=furColor;
    }
    move():string{
        return `phuong thuc di chuyern cua dong vat co vu`;
    }
    getfurColor():string{
        //lay mau long dong vat co vu
        return `mau long cua loai:${this.name} la ${this.furColor}`;
    }
}

class Bird extends Animal{
    private wingSpan :number;
    constructor(name:string,age:number,wingSpan:number){
        super(name,age,wingSpan);
        this.name=name;
        this.age=age;
        this.wingSpan = wingSpan;
    }
    move():string{
        return `phuong thuc di chuyen cua peter`;
    }
    getwingSpan():string{
        //lay thong tin sai sach cua loai peter
        return `sai canh cua loai peter:${this.name} dai ${this.wingSpan}cm`;
    }
}


class Reptile  extends Animal{
    private venomous :boolean;
    constructor(name:string,age:number, venomous:boolean){
        super(name,age,venomous);
        this.name=name;
        this.age=age;
        this.venomous = venomous;
    }
    move():string{
        return `phuong thuc di chuyen cua loai bo sat`;
    }
    getvenomous():string{
        //lay thong tin dong vat bo sat co doc khong
        return `loai bo sat: ${this.name} co doc khong: ${this.venomous}`;
    }
}



const animal:Animal[] = [
    new Mammal("ran",10,"do"),
    new Bird("peterpeter",10,5),
    new Reptile("blue", 2, true),
];



animal.forEach(item=>{
    console.log(item.move());
});



const tuanminh = new Bird("peter", 19, 5);
const phamloc = new Reptile("Loc ran", 2, true);

console.log(tuanminh.getwingSpan());
console.log(phamloc.getvenomous());










































