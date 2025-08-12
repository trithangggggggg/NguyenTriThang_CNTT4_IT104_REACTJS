abstract class Person{
    public name:string;
    constructor(name:string){
        this.name=name;
    }  
    displayInfo():string{
        return `Nguoi nay ten la ${this.name}`
    }
}


class Student extends Person{
    public id:number;
    constructor(id:number,name:string){
        super(name);
        this.id=id;
    }
    displayInfo():string{
        return `Student id ${this.id} ten la ${this.name}`
    }
}

class Teacher extends Person{
    public subject:string;
    constructor(name:string, subject:string){
        super(name);
        this.subject=subject;
    }
    displayInfo(): string {
        return `Teacher ${this.name} day mon ${this.subject}`
    }
}


const tuamminh = new Student(1,'Tu A Minh');
console.log(tuamminh.displayInfo());

const trithang = new Teacher('Tri Thang ', 'PYTHON');
console.log(trithang.displayInfo());










