"use strict";
function printStaffInfo(staff) {
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), ma nhan vien: ${staff.employeeID}, bo phan: ${staff.department}`);
}
const staff111 = {
    name: "Nguyen tri thang",
    age: 25,
    employeeID: "123456",
    department: "IT"
};
printStaffInfo(staff111);
