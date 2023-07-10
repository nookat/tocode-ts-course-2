class Vehicle {
  public drive(speed: number): void {
    console.log('Let us go with speed', speed.toFixed());
    this.privateLog(speed);
  }

  public stop() {
    console.log('Stopped');
  }

  private privateLog(speed: number) {
    console.log('Vehicle has changed speed to', speed);
  }

  protected alternativeLog(text: string) {
    console.log(text.toUpperCase());
  }
}

class Car extends Vehicle {
  public changeSpeed(speed: number) {
    this.drive(speed);
    this.alternativeLog('hello world');
  }
}

const car1 = new Car();
car1.drive(55);
car1.stop();
// car1.log(20); // log - приватный
car1.changeSpeed(22);

export {}