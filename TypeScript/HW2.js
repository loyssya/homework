"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(brand) {
        this.brand = brand;
        this.speed = 0;
        this.maxSpeed = 0;
        this.colorCar = "";
        this.doors = 0;
        this.wheels = 4;
    }
    return Car;
}());
var Porsche = (function (_super) {
    __extends(Porsche, _super);
    function Porsche(id) {
        var _this = _super.call(this, "Porsche") || this;
        _this.id = id;
        _this.summerTires = true;
        _this.winterTires = false;
        _this.maxSpeed = 200;
        _this.colorCar = "blue";
        _this.doors = 4;
        return _this;
    }
    Porsche.prototype.speedCar = function () {
        if (this.speed == this.maxSpeed) {
            console.log("This is the maximum speed. You cannot go faster.");
        }
        else {
            this.speed += 5;
        }
    };
    Porsche.prototype.brakingCar = function () {
        this.speed -= 5;
        if (this.speed == 0) {
            console.log("This is the minimum speed. You stopped.");
        }
    };
    Porsche.prototype.descriptionCar = function () {
        document.write("Car brand: " + this.brand + "<br>");
        document.write("Code car: " + this.id + "<br>");
        document.write("Maximum speed: " + this.maxSpeed + "km / h" + "<br>");
        document.write("Summer tires: " + this.summerTires + "<br>");
        document.write("Winter tires: " + this.winterTires + "<br>");
        document.write("Color car: " + this.colorCar + "<br>");
        document.write("Number of car doors: " + this.doors + "<br>");
    };
    return Porsche;
}(Car));
var Tesla = (function (_super) {
    __extends(Tesla, _super);
    function Tesla(id) {
        var _this = _super.call(this, "Tesla") || this;
        _this.id = id;
        _this.summerTires = false;
        _this.winterTires = true;
        _this.maxSpeed = 250;
        _this.colorCar = "green";
        _this.doors = 5;
        return _this;
    }
    Tesla.prototype.speedCar = function () {
        if (this.speed == this.maxSpeed) {
            console.log("This is the maximum speed. You cannot go faster.");
        }
        else {
            this.speed += 15;
        }
    };
    Tesla.prototype.brakingCar = function () {
        this.speed -= 15;
        if (this.speed == 0) {
            console.log("This is the minimum speed. You stopped.");
        }
    };
    Tesla.prototype.descriptionCar = function () {
        document.write("<br>" + "Car brand: " + this.brand + "<br>");
        document.write("Code car: " + this.id + "<br>");
        document.write("Maximum speed: " + this.maxSpeed + "km / h" + "<br>");
        document.write("Summer tires: " + this.summerTires + "<br>");
        document.write("Winter tires: " + this.winterTires + "<br>");
        document.write("Color car: " + this.colorCar + "<br>");
        document.write("Number of car doors: " + this.doors + "<br>");
    };
    return Tesla;
}(Car));
var Ford = (function (_super) {
    __extends(Ford, _super);
    function Ford(id) {
        var _this = _super.call(this, "Ford") || this;
        _this.id = id;
        _this.summerTires = true;
        _this.winterTires = false;
        _this.maxSpeed = 150;
        _this.colorCar = "red";
        _this.doors = 4;
        return _this;
    }
    Ford.prototype.speedCar = function () {
        if (this.speed == this.maxSpeed) {
            console.log("This is the maximum speed. You cannot go faster.");
        }
        else {
            this.speed += 10;
        }
    };
    Ford.prototype.brakingCar = function () {
        this.speed -= 10;
        if (this.speed == 0) {
            console.log("This is the minimum speed. You stopped.");
        }
    };
    Ford.prototype.descriptionCar = function () {
        document.write("<br>" + "Car brand: " + this.brand + "<br>");
        document.write("Code car: " + this.id + "<br>");
        document.write("Maximum speed: " + this.maxSpeed + "km / h" + "<br>");
        document.write("Summer tires: " + this.summerTires + "<br>");
        document.write("Winter tires: " + this.winterTires + "<br>");
        document.write("Color car: " + this.colorCar + "<br>");
        document.write("Number of car doors: " + this.doors + "<br>");
    };
    return Ford;
}(Car));
var carPorsche1 = new Porsche(1254);
var carPorsche2 = new Porsche(5685);
var carTesla1 = new Tesla(585858);
var carTesla2 = new Tesla(656955);
var carFord1 = new Ford(357894);
var carFord2 = new Ford(251506);
carPorsche1.speedCar();
carPorsche1.brakingCar();
carPorsche2.descriptionCar();
carTesla1.descriptionCar();
carFord2.descriptionCar();
