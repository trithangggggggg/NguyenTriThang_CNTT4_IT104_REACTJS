"use strict";
function displayStudent(student) {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi, email la ${student.email}`);
}
const student1 = {
    name: 'Nguyen Tri Thang',
    age: 20,
    email: 'aasd@gmail.com'
};
displayStudent(student1);
