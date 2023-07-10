"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    go(speed) {
        console.log('Let us go with speed', speed.toFixed());
    }
    stop() {
        console.log('Stopped');
    }
}
const car = new Car();
car.go(12);
