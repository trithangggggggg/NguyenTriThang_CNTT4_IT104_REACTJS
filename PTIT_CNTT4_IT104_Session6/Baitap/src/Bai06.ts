class Student {
    private _id: number
    private _name: string

    constructor(id: number, name: string) {
        this._id = id
        this._name = name
    }

    getId(): number {
        return this._id
    }

    getName(): string {
        return this._name
    }
}

class Classroom {
    private students: Student[] = []

    showStudents(): void {
        console.log("Danh sach hoc sinh trong lop:")
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Ten: ${student.getName()}`)
        })
    }
    addStudent(student: Student): void {
        this.students.push(student)
    }
    filterStudent(id: number): Student[] {
        return this.students.filter(student => student.getId() === id)
    }

    addStudentInClass(allStudents: Student[], id: number): void {
        const studentIndex = allStudents.findIndex(student => student.getId() === id)
        if (studentIndex !== -1) {
            this.addStudent(allStudents[studentIndex])
            allStudents.splice(studentIndex, 1)
        }
    }
}

const allStudents: Student[] = [
    new Student(1, "Nguyen Van A"),
    new Student(2, "Nguyen Van B"),
    new Student(3, "Nguyen Van C"),
    new Student(4, "Nguyen Van D"), 
    new Student(5, "Nguyen Van E"),
    new Student(6, "Nguyen Van F")
]

const class1 = new Classroom()
const class2 = new Classroom()

class1.addStudentInClass(allStudents, 1)
class1.addStudentInClass(allStudents, 2) 
class1.addStudentInClass(allStudents, 3)

class2.addStudentInClass(allStudents, 4)
class2.addStudentInClass(allStudents, 5)
class2.addStudentInClass(allStudents, 6)

console.log("Lop 1:")
class1.showStudents()

console.log("\nLop 2:") 
class2.showStudents()

console.log("\nHoc sinh chua co lop:", allStudents.length)


