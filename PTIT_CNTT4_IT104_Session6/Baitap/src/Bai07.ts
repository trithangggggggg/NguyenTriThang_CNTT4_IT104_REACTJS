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

    setName(name: string): void {
        this._name = name
    }
}

class Classroom {
    private students: Student[] = []

    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Lop khong co hoc sinh nao")
            return
        }
        console.log("Danh sach hoc sinh trong lop:")
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Ten: ${student.getName()}`)
        })
    }

    addStudent(student: Student): void {
        this.students.push(student)
    }

    removeStudent(allStudents: Student[], id: number): void {
        const index = this.students.findIndex(student => student.getId() === id)
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0]
            allStudents.push(removedStudent)
            console.log(`Da xoa hoc sinh ID ${id} khoi lop`)
        } else {
            console.log(`Khong tim thay hoc sinh ID ${id} trong lop`)
        }
    }

    editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id)
        if (student) {
            student.setName(newName)
            console.log(`Da cap nhat ten hoc sinh ID ${id} thanh ${newName}`)
        } else {
            console.log(`Khong tim thay hoc sinh ID ${id} de chinh sua`)
        }
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
    new Student(2, "Tran Thi B"),
    new Student(3, "Le Van C")
]

const myClass = new Classroom()

myClass.addStudentInClass(allStudents, 1)
myClass.addStudentInClass(allStudents, 2)

console.log("--- Sau khi them hoc sinh ---")
myClass.showStudents()

myClass.editStudent(1, "Nguyen Van B ")
myClass.editStudent(99, "Khong ton tai")

myClass.removeStudent(allStudents, 2)
myClass.removeStudent(allStudents, 99)

console.log("\n--- Sau khi chinh sua va xoa ---")
myClass.showStudents()

console.log("\nDanh sach hoc sinh chua co lop:")
console.log(allStudents.map(s => `ID: ${s.getId()}, Ten: ${s.getName()}`).join('\n'))
