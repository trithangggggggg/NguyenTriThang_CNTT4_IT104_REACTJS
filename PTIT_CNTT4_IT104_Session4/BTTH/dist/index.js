//mag chua danh sach sinh vien
let student = [];
//tao ham them thong tin sinh vien
function addStudent(id, name, age, subject) {
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject: subject
    };
    student.push(newStudent);
}
addStudent(1, "tri thang", 20, [{ subjectName: "toan", score: 10 }, { subjectName: "ly", score: 8 }, { subjectName: "hoa", score: 9 }]);
addStudent(2, "undefined", 19, [{ subjectName: "fontend", score: 100 }]);
//tao ham hien thi thong tin sinh vien
function showStudent() {
    for (let i = 0; i < student.length; i++) {
        console.log(`thong tin sinh vien thu ${i + 1}: name_${student[i].name}, age_${student[i].age}`);
    }
}
//ham cap nhat sinh vien
function updateStudent(id) {
    //kiem tra xem id co ton tai khong
    for (let i = 0; i < student.length; i++) {
        if ((id !== student[i].id)) {
            console.log(`Sinh vien id ${id} khong ton tai`);
        }
        else {
            //cap nhat thong tin sinh vien
            student[i].name = prompt("Nhap ten sinh vien: ");
            student[i].age = Number(prompt("Nhap tuoi sinh vien: "));
            // student[i].subject = 
        }
    }
    
}
let idUpdate = Number(prompt("Nhap id sinh vien muon update: "));
updateStudent(idUpdate);
showStudent();
//ham xoa sinh vien
