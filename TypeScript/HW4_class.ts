import { Appearance, FeatureCar } from "./HW4_interface";

abstract class Car implements Appearance {
    constructor(protected brand: string, public maxSpeed: number, public colorCar: string) {
            }

    protected doors: number = 0;
    protected speed: number = 0;
    abstract speedCar(): void;
    abstract brakingCar(): void;
    

}

export class Porsche extends Car implements FeatureCar{
    constructor( public summerTires: boolean, public winterTires: boolean ){
        super("Porsche", 200, "blue")
        this.doors = 4;
    }
    speedCar() {
        if (this.speed == this.maxSpeed) {
            console.log("This is the maximum speed. You cannot go faster.");
        } else {
            this.speed += 5;
        }
    }


    brakingCar() {
        this.speed -= 5;
        if (this.speed == 0) {
            console.log("This is the minimum speed. You stopped.")
        }
    }

}

export class Tesla extends Car implements FeatureCar{
    constructor( public summerTires: boolean, public winterTires: boolean ){
        super("Tesla", 350, "red")
        this.doors = 5;
    }
    speedCar() {
        if (this.speed == this.maxSpeed) {
            console.log("This is the maximum speed. You cannot go faster.");
        } else {
            this.speed += 25;
        }
    }


    brakingCar() {
        this.speed -= 25;
        if (this.speed == 0) {
            console.log("This is the minimum speed. You stopped.")
        }
    }

}