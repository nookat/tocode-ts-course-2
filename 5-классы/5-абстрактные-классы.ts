abstract class Vehicle {
  abstract color: string; // Если абстрактный, то просто описываем без значений

  abstract drive(speed: number): void; // Абстрактный метод. Описываем без значений

  public stop() {
    console.log('Stopped');
  }
}

class Car extends Vehicle {
  constructor(public color: string) {
    super();
  }

  // необходимо реализовать метод drive
  drive(speed: number) {
    console.log(speed);
  }
}

// const v1 = new Vehicle(); // нельзя создать экземпляр. Класс абстрактный

export {}