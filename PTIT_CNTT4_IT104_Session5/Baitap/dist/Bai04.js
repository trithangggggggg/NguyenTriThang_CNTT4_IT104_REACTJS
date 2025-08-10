class _Vehicle {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`;
    }
}
const myCar = new _Vehicle(1, "Camry", 2000, "Toyota");
console.log((myCar.getInfo()));
