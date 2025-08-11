class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(workingHour) {
        super("Parttime");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary() {
        return 10000000;
    }
}
const parttimeJob = new ParttimeJob(20);
const fulltimeJob = new FulltimeJob();
parttimeJob.printType();
console.log(`Lương partime: ${parttimeJob.calculateSalary()} VND`);
fulltimeJob.printType();
console.log(`Lương fulltime: ${fulltimeJob.calculateSalary()} VND`);
