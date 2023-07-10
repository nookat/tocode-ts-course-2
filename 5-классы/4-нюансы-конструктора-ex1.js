"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.log();
    }
    area() {
        return this.height * this.width;
    }
    log() {
        console.log(`new Rectangle was created at ${new Date()}`);
    }
}
class Square extends Rectangle {
    constructor(width, color) {
        super(width, width);
        this.color = color;
    }
    paint(newColor) {
        this.color = newColor;
    }
}
const square = new Square(20, 'blue');
square.paint('red');
console.log(square);
