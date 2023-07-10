"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(createdAt) {
        this.createdAt = createdAt;
    }
    drive(speed) {
        console.log('Let us go with speed', speed.toFixed());
        this.privateLog(speed);
    }
    stop() {
        console.log('Stopped');
    }
    privateLog(speed) {
        console.log('Vehicle has changed speed to', speed, this.createdAt);
    }
    alternativeLog(text) {
        console.log(text.toUpperCase());
    }
}
class Car extends Vehicle {
    // public color: string;
    // public maxSpeed: number;
    constructor(color, maxSpeed) {
        super(new Date());
        this.color = color;
        this.maxSpeed = maxSpeed;
        // this.color = color;
        // this.maxSpeed = maxSpeed;
    }
    getInfo() {
        console.log(this.color, this.maxSpeed, this.createdAt);
    }
}
const car = new Car('red', 200);
console.log(car.color); // прочитать можно
