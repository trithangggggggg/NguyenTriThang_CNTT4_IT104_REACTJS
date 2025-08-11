

// interface 


interface Product{
    name:string;
    price:number;
    getInfo():string;
}


class A implements Product{
    name: string;
    price: number;
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
    getInfo(): string {
        return `Product name: ${this.name}, Price: ${this.price}`;
    }
}















