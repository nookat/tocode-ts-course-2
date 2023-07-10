"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    stop() {
        console.log('Stopped');
    }
}
class Car extends Vehicle {
    constructor(color) {
        super();
        this.color = color;
    }
    // необходимо реализовать метод drive
    drive(speed) {
        console.log(speed);
    }
}
