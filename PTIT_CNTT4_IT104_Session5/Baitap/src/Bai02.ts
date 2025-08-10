
class Student{
    id:number;
    age:number;
    email:string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age  = age;
        this.email = email;
    }
}

const arr_student:Student[] = [];

arr_student.push(new Student(1, 19,"trithang@gmail.com"));
arr_student.push(new Student(2, 20,"thang@gmail.com"));
arr_student.push(new Student(3, 22,"tri@gmail.com"));

console.log(arr_student);




