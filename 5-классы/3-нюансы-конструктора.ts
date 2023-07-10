class Vehicle {
  constructor(protected createdAt: Date) {}

  public drive(speed: number): void {
    console.log('Let us go with speed', speed.toFixed());
    this.privateLog(speed);
  }

  public stop() {
    console.log('Stopped');
  }

  private privateLog(speed: number) {
    console.log('Vehicle has changed speed to', speed, this.createdAt);
  }

  protected alternativeLog(text: string) {
    console.log(text.toUpperCase());
  }
}

class Car extends Vehicle {
  // public color: string;
  // public maxSpeed: number;

  constructor(public readonly color: string, public maxSpeed: number) { // при задании модификатора на уровне конструктора в параметрах автоматом будут поля при создании экземпляра
    super(new Date());
    // this.color = color;
    // this.maxSpeed = maxSpeed;
  }

  getInfo() {
    console.log(this.color, this.maxSpeed, this.createdAt);
  }
}

const car = new Car('red', 200);
console.log(car.color) // прочитать можно
// car.color = 'blue' // readonly

export {}