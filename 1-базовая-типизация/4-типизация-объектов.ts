const car: {
  wheels: number,
  brand: string,
  type: string
} = {
  wheels: 4,
  brand: 'BMW',
  type: 'sedan'
}

export interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;

  [key: string]: unknown;
}

const car2: Car = {
  wheels: 4,
  brand: 'Audi',
  type: 'sedan',
  isNew: true,
}

console.log(car2.type);

const car3: Car = {
  wheels: 3,
  brand: 'Skoda',
  type: 'liftback',
  name: 'Ivan'
};

console.log(car3.name);