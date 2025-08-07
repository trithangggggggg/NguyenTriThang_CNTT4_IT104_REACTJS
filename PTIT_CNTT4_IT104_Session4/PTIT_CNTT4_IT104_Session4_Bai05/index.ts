type Person ={
    name: string,
    age:number
};


type Employee ={
    employeeID:string,
    department:string
};

type StaffMember  = Person&Employee;

function printStaffInfo(staff: StaffMember): void{
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), ma nhan vien: ${staff.employeeID}, bo phan: ${staff.department}`);
    
}

const staff111: StaffMember = {
    name: "Nguyen tri thang",
    age: 25,
    employeeID: "123456",
    department: "IT"
};

printStaffInfo(staff111);





