class _Vehicle {
    public name:string;
    protected year:number;
    private company:string;
    public readonly id:number;

    constructor  (id:number , name:string, year:number , company:string){
        this.id=id;
        this.name=name;
        this.year=year;
        this.company = company;
    }
    public getInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`;
    }
}

const myCar = new _Vehicle(1, "Camry", 2000, "Toyota");

console.log((myCar.getInfo()));


