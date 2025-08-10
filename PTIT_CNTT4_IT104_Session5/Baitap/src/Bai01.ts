    

class Vehicle {
    name:string;
    year:number;
    company:string
    constructor  (name:string , year:number, company:string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}


const vehicle1 = new Vehicle ("land cuiser", 1999,  "toyota");
const vehicle2 = new Vehicle ("sh", 2006,  "honda");


console.log(vehicle1);
console.log(vehicle2);



