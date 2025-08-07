type Student = {
  readonly studentId: string;
  name: string;
  email: string;
  hasCompleted: boolean;
  finalScore?: number;
};

type Course = {
  courseId: string;
  title: string;
  instructor: string;
  students: Student[];
  isActive: boolean;
};

type CourseManager = {
  schoolName: string;
  year: number;
  courses: Course[];
};

function getCompletedStudents(course: Course): Student[] {
  return course.students.filter(s => s.hasCompleted || s.finalScore !== undefined);
}

function calculateAverageScore(course: Course): number | null {
  const scores = course.students
    .filter(s => s.hasCompleted && s.finalScore !== undefined)
    .map(s => s.finalScore as number);

  if (scores.length === 0) return null;
  const total = scores.reduce((sum, score) => sum + score, 0);
  return Math.floor(total / (course.students.length || 1));
}

function printCourseReport(manager: CourseManager): void {
  manager.courses.forEach((course, index) => {
    console.log(`${index + 1}. Khóa: ${course.title} (GV: ${course.instructor})`);
    console.log(`   - Tổng học viên: ${course.students.length}`);
    console.log(`   - Hoàn thành: ${getCompletedStudents(course).length} học viên`);
    
    const avg = calculateAverageScore(course);
    console.log(`   - Trung bình điểm: ${avg !== null ? avg : "N/A"}`);
    console.log(`   - Trạng thái: ${course.isActive ? "ĐÃ ĐÓNG" : "ĐANG MỞ"}`);
    console.log("");
  });
}


const manager: CourseManager = {
  schoolName: "PTIT",
  year: 2025,
  courses: [
    {
      courseId: "C01",
      title: "Js",
      instructor: "Nguyyen Tri Thang",
      isActive: true,
      students: [
        { studentId: "S1", name: "Tú", email: "tu@gmail.com", hasCompleted: true, finalScore: 9 },
        { studentId: "S2", name: "Linh", email: "linh@gmail.com", hasCompleted: false, finalScore: 8 },
        { studentId: "S3", name: "Minh", email: "minh@gmail.com", hasCompleted: true }
      ]
    },
    {
      courseId: "C02",
      title: "HTML & CSS",
      instructor: "Nguyen Van Anh ",
      isActive: false,
      students: [
        { studentId: "S4", name: "An", email: "an@gmail.com", hasCompleted: false },
        { studentId: "S5", name: "Hà", email: "ha@gmail.com", hasCompleted: false }
      ]
    }
  ]
};

printCourseReport(manager);


