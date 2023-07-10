"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    drive(speed) {
        console.log('Let us go with speed', speed.toFixed());
        this.privateLog(speed);
    }
    stop() {
        console.log('Stopped');
    }
    privateLog(speed) {
        console.log('Vehicle has changed speed to', speed);
    }
    alternativeLog(text) {
        console.log(text.toUpperCase());
    }
}
class Car extends Vehicle {
    changeSpeed(speed) {
        this.drive(speed);
        this.alternativeLog('hello world');
    }
}
const car1 = new Car();
car1.drive(55);
car1.stop();
// car1.log(20); // log - приватный
car1.changeSpeed(22);
