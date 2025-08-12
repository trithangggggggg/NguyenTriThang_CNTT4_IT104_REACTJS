class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        return `Nguoi nay ten la ${this.name}`;
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        return `Student id ${this.id} ten la ${this.name}`;
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        return `Teacher ${this.name} day mon ${this.subject}`;
    }
}
const tuamminh = new Student(1, 'Tu A Minh');
console.log(tuamminh.displayInfo());
const trithang = new Teacher('Tri Thang ', 'PYTHON');
console.log(trithang.displayInfo());
