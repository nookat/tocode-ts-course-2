class Circle {
  constructor(public radius: number) {}

  protected static pi: number = 3.14; // по умолчанию public модификатор доступа, но можно менять

  private static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  get area() { // по умолчанию public
    return Circle.pi * this.radius * this.radius;
  }
}

const circle = new Circle(20);
console.log(circle.radius);
// circle.pi  // нельзя обратиться к статическому свойству через instance

// console.log(Circle.pi); // если не public, то не можем использовать снаружи

class Ellipse extends Circle {
  constructor(public radius: number) {
    super(radius);
    console.log(Circle.pi); // доступно, pi - protected
    // calculateArea недоступен. так как private
  }
}

export {}