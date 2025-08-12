class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        return ` The vehicle ${this.name} is slowing down (${this.speed - 10} km).`;
    }
    speedUp() {
        return ` The vehicle ${this.name} is speeding up (${this.speed + 10} km).`;
    }
    showSpeed() {
        return ` The vehicle ${this.name} is moving at a speed of ${this.speed} km/h.`;
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    getGear() {
        return this.gear;
    }
    showInfo() {
        return `Id: ${this.id}, Name: ${this.name}, Speed: ${this.speed} km/h, Gear: ${this.getGear()}`;
    }
}
const trithang = new Bicycle('Trithang', 50, 1, 100);
console.log(trithang.showInfo());
const phamloc = new Vehicle('Pham Loc', 60, 2);
console.log(phamloc.slowDown());
