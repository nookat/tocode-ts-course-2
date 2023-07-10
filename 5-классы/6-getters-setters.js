"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
}
const rect1 = new Rectangle(20, 12);
console.log(rect1.area);
class Car {
    constructor(color, _maxSpeed, #country = 'USA') {
        this.color = color;
        this._maxSpeed = _maxSpeed;
        this.#country = #country;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    set maxSpeed(speed) {
        if (speed > 0) {
            this._maxSpeed = speed;
        }
    }
}
const car = new Car('bmw', 220);
console.log(car.maxSpeed);
car.maxSpeed = 400;
console.log(car.maxSpeed);
