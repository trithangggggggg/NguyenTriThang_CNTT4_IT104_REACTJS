interface Student{
    name: string;
    age: number;
    email: string
}


function displayStudent(student: Student):void{
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi, email la ${student.email}`);
}


const student1:Student = {
    name: 'Nguyen Tri Thang',
    age: 20,
    email: 'aasd@gmail.com'
}


displayStudent(student1);
