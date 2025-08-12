
class Employee{
    public name:string;
    protected company:string;
    private phone:number;   
    constructor(name:string, company:string,phone:number){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }
    getPhone(){
        return this.phone;
    }
    printInfo(){
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`)
    }
}



class Manager extends Employee{
    public teamSize:number;
    constructor(name:string, company:string,phone:number,teamSize:number){
        super(name, company,phone);
        this.teamSize=teamSize;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.getPhone()} , Team Size: ${this.teamSize}`);
        
    }
}

const tuanminh = new Manager('Tuan Minh', 'ABC', 123456789, 10);
const phamloc = new Employee('Pham Loc', 'ABC', 987654321);
console.log(tuanminh.printInfo());
console.log(phamloc.printInfo());





