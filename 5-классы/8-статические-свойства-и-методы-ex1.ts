class Temperature {
  constructor(private celsius: number) {}

  get fahrenheit(): number {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  public static fromFahrenheit(value: number) {
    return new Temperature(Math.round((value - 32) / 1.8));
  }
}

const temp0 = Temperature.fromFahrenheit(63);
console.log(temp0.fahrenheit);
const temp1 = new Temperature(25);
temp1.fahrenheit = 33;


export {}