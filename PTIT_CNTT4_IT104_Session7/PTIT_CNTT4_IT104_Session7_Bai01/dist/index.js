class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.getPhone()} , Team Size: ${this.teamSize}`);
    }
}
const tuanminh = new Manager('Tuan Minh', 'ABC', 123456789, 10);
const phamloc = new Employee('Pham Loc', 'ABC', 987654321);
console.log(tuanminh.printInfo());
console.log(phamloc.printInfo());
