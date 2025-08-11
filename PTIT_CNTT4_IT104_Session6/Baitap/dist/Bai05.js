class Vehicle {
    constructor(initialSpeed = 0) {
        this.speed = initialSpeed;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tang toc: +${amount} km/h -> Toc do hien tai: ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0;
        console.log(`Giam toc: -${amount} km/h -> Toc do hien tai: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dung xe -> Toc do hien tai: ${this.speed} km/h`);
    }
}
const myCar = new Vehicle();
myCar.speedUp(50);
myCar.slowDown(20);
myCar.speedUp(10);
myCar.stop();
