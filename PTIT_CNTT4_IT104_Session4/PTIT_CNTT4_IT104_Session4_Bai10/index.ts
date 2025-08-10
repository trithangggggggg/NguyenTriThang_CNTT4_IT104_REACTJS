"use strict";

type Student = {
    readonly studentId: string;
    readonly name: string;
    email: string;
    hasComplete: boolean;
    finalScore?: number;
};

type Course = {
    courseId: string;
    title: string;
    instructor: string;
    student: Student[];
    isActive: boolean;
};

type CourseManager = {
    schoolName: string;
    year: number;
    course: Course[];
};

const sv1: Student = {
    studentId: "sv1",
    name: "Nguyen Van A",
    email: "nguyenvana@gmail.com",
    hasComplete: true,
    finalScore: 10
};

const sv2: Student = {
    studentId: "sv2",
    name: "Nguyen Van B",
    email: "nguyenvanB@gmail.com",
    hasComplete: true,
    finalScore: 10
};

const course1: Course = {
    courseId: "C01",
    title: "Cau truc du lieu giai thuat",
    instructor: "",
    student: [sv1],
    isActive: true
};

const course2: Course = {
    courseId: "C02",
    title: "Cau truc java",
    instructor: "",
    student: [sv2],
    isActive: false
};

const courseManager: CourseManager = {
    schoolName: "Truong Dai hoc Bach khoa",
    year: 2022,
    course: [course1, course2]
};

function getCompletedStudent(courseManager: CourseManager, studentId: string): Student | null {
    for (const c of courseManager.course) {
        const found = c.student.find(s => s.studentId === studentId && s.hasComplete);
        if (found) return found;
    }
    return null;
}

console.log(getCompletedStudent(courseManager, "sv1"));
console.log(getCompletedStudent(courseManager, "sv3"));
