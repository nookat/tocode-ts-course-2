class Rectangle {
  constructor(public width: number, public height: number) {}

  get area(): number { // геттер
    return this.width * this.height;
  }
}

const rect1 = new Rectangle(20, 12);
console.log(rect1.area);

class Car {
  constructor(public color: string, private _maxSpeed: number, private #country = 'USA') {}

  get maxSpeed(): number {
    return this._maxSpeed;
  }

  set maxSpeed(speed: number) {
    if (speed > 0) {
      this._maxSpeed = speed;
    }
  }
}

const car = new Car('bmw', 220);
console.log(car.maxSpeed)

car.maxSpeed = 400;
console.log(car.maxSpeed);

export {}