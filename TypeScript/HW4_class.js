class Car {
    constructor(brand, maxSpeed, colorCar) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.colorCar = colorCar;
        this.doors = 0;
        this.speed = 0;
    }
}
export class Porsche extends Car {
    constructor(summerTires, winterTires) {
        super("Porsche", 200, "blue");
        this.summerTires = summerTires;
        this.winterTires = winterTires;
        this.doors = 4;
    }
    speedCar() {
        if (this.speed == this.maxSpeed) {
            console.log("This is the maximum speed. You cannot go faster.");
        }
        else {
            this.speed += 5;
        }
    }
    brakingCar() {
        this.speed -= 5;
        if (this.speed == 0) {
            console.log("This is the minimum speed. You stopped.");
        }
    }
}
export class Tesla extends Car {
    constructor(summerTires, winterTires) {
        super("Tesla", 350, "red");
        this.summerTires = summerTires;
        this.winterTires = winterTires;
        this.doors = 5;
    }
    speedCar() {
        if (this.speed == this.maxSpeed) {
            console.log("This is the maximum speed. You cannot go faster.");
        }
        else {
            this.speed += 25;
        }
    }
    brakingCar() {
        this.speed -= 25;
        if (this.speed == 0) {
            console.log("This is the minimum speed. You stopped.");
        }
    }
}
