abstract class Job {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  printType(): void {
    console.log(`Loại công việc: ${this.type}`);
  }

  abstract calculateSalary(): number;
}

class ParttimeJob extends Job {
  workingHour: number;

  constructor(workingHour: number) {
    super("Parttime");
    this.workingHour = workingHour;
  }

  calculateSalary(): number {
    return 30000 * this.workingHour;
  }
}

class FulltimeJob extends Job {
  constructor() {
    super("Fulltime");
  }

  calculateSalary(): number {
    return 10000000;
  }
}

const parttimeJob = new ParttimeJob(20);
const fulltimeJob = new FulltimeJob();

parttimeJob.printType();
console.log(`Lương partime: ${parttimeJob.calculateSalary()} VND`);

fulltimeJob.printType();
console.log(`Lương fulltime: ${fulltimeJob.calculateSalary()} VND`);








