"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
    get area() {
        return Circle.pi * this.radius * this.radius;
    }
}
Circle.pi = 3.14; // по умолчанию public модификатор доступа, но можно менять
const circle = new Circle(20);
console.log(circle.radius);
// circle.pi  // нельзя обратиться к статическому свойству через instance
// console.log(Circle.pi); // если не public, то не можем использовать снаружи
class Ellipse extends Circle {
    constructor(radius) {
        super(radius);
        this.radius = radius;
        console.log(Circle.pi); // доступно, pi - protected
        // calculateArea недоступен. так как private
    }
}
