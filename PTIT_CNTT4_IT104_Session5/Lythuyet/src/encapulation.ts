class Student{
    fullName:string;
    age:number
    //doi tuong co thuoc tinh va phuong thuc
    constructor(value_fullName:string, value_Age:number){
        this.fullName = value_fullName;
        this.age = value_Age;
    }
    getInfo():string{
        return `toi la ${this.fullName}, ${this.age} tui`;
    }
    setName(new_name:string){
        this.fullName = new_name;
    }
    setAge(new_age: number){
        this.age = new_age;
    }
}

let sv1 = new Student('Nguyen Van A', 20); // sv1 la 1 instance cua class Student
sv1.setAge(19);
sv1.setName("thanh ha");
console.log(sv1.getInfo());






