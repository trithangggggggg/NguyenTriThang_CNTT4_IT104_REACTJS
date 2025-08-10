class Employee {
  name: string;
  company: string;
  phone: string;

  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }

  printInfo(): void {
    console.log("Name:", this.name);
    console.log("Company:", this.company);
    console.log("Phone:", this.phone);
  }
}

const employee = new Employee("trithang", "rikkei", "1352340");

employee.printInfo();

