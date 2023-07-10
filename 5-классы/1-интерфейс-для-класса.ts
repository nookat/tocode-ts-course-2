interface ICar {
  go(speed: number): void;
  // maxSpeed?: number;
}

class Car implements ICar {
  go(speed: number) {
    console.log('Let us go with speed', speed.toFixed());
  }

  stop() {
    console.log('Stopped');
  }
}

const car = new Car();
car.go(12);
//car.maxSpeed = 200; // Если в интерфейсе есть опциональное свойство и в классе оно не указано, то через instance нет доступа к нему


export {}