interface Tires {
    summerTires: boolean;
    winterTires: boolean;

}

abstract class Car {
    protected speed: number = 0;
    protected maxSpeed: number = 0;
    protected colorCar: string = "";
    protected doors: number = 0;
    private wheels: number = 4;
    constructor(protected brand: string) {

    }
    abstract speedCar(): void;
    abstract brakingCar(): void;

}

class Porsche extends Car implements Tires {
    constructor(public id: number) {
        super("Porsche");
        this.maxSpeed = 200;
        this.colorCar = "blue"
        this.doors = 4;
    }
    public summerTires = true;
    public winterTires = false;

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

    descriptionCar() {
        document.write("Car brand: " + this.brand+ "<br>");
        document.write("Code car: " + this.id + "<br>");
        document.write("Maximum speed: " + this.maxSpeed + "km / h" + "<br>");
        document.write("Summer tires: " + this.summerTires + "<br>");
        document.write("Winter tires: " + this.winterTires + "<br>");
        document.write("Color car: " + this.colorCar + "<br>");
        document.write("Number of car doors: " + this.doors+ "<br>");

    }
}
class Tesla extends Car implements Tires {
    constructor(public id: number) {
        super("Tesla");
        this.maxSpeed = 250;
        this.colorCar = "green"
        this.doors = 5;
    }
    public summerTires = false;
    public winterTires = true;

    speedCar() {
        if (this.speed == this.maxSpeed) {
            console.log("This is the maximum speed. You cannot go faster.");
        } else {
            this.speed += 15;
        }
    }


    brakingCar() {
        this.speed -= 15;
        if (this.speed == 0) {
            console.log("This is the minimum speed. You stopped.")
        }
    }

    descriptionCar() {
        document.write("<br>"+"Car brand: " + this.brand+ "<br>");
        document.write("Code car: " + this.id + "<br>");
        document.write("Maximum speed: " + this.maxSpeed + "km / h" + "<br>");
        document.write("Summer tires: " + this.summerTires + "<br>");
        document.write("Winter tires: " + this.winterTires + "<br>");
        document.write("Color car: " + this.colorCar + "<br>");
        document.write("Number of car doors: " + this.doors+ "<br>");

    }
}

class Ford extends Car implements Tires {
    constructor(public id: number) {
        super("Ford");
        this.maxSpeed = 150;
        this.colorCar = "red"
        this.doors = 4;
    }
    public summerTires = true;
    public winterTires = false;

    speedCar() {
        if (this.speed == this.maxSpeed) {
            console.log("This is the maximum speed. You cannot go faster.");
        } else {
            this.speed += 10;
        }
    }


    brakingCar() {
        this.speed -= 10;
        if (this.speed == 0) {
            console.log("This is the minimum speed. You stopped.")
        }
    }

    descriptionCar() {
        document.write("<br>"+"Car brand: " + this.brand+ "<br>");
        document.write("Code car: " + this.id + "<br>");
        document.write("Maximum speed: " + this.maxSpeed + "km / h" + "<br>");
        document.write("Summer tires: " + this.summerTires + "<br>");
        document.write("Winter tires: " + this.winterTires + "<br>");
        document.write("Color car: " + this.colorCar + "<br>");
        document.write("Number of car doors: " + this.doors+ "<br>");

    }
}
let carPorsche1 = new Porsche(1254);
let carPorsche2 = new Porsche(5685);
let carTesla1 = new Tesla(585858);
let carTesla2 = new Tesla(656955);
let carFord1 = new Ford(357894);
let carFord2 = new Ford(251506);

carPorsche1.speedCar();
carPorsche1.brakingCar();
carPorsche2.descriptionCar();
carTesla1.descriptionCar();
carFord2.descriptionCar();


