// Aliases type
// 1. primitives, union
// type Window - Не может быть создан. Не можем использовать если уже есть зарезирвированные названия

// Interfaces
// 1. Когда мы хотим расширять interface в будущем
// 2. Классы. Используем с implements

// на Алиасах

type Product = {
  price: number;
  isNew?: boolean;
  isSale?: boolean;
  title: string;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};

type Car = {
  type: string;
  model: string;
} & Product & Vehicle;

const car: Car = {
  wheels: 2,
  type: 'sedan',
  model: 'x',
  year: 2010,
  brand: 'tesla',
  price: 200,
  title: 'Tesla model x'
};


// Интерфейсы

interface IProduct {
  price: number;
  isNew?: boolean;
  isSale?: boolean;
  title: string;
}

interface IVehicle {
  wheels: number;
  year: number;
  brand: string;
}

interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

const car2: ICar = {
  type: 'x',
  model: 'tesla',
  wheels: 4,
  year: 2020,
  brand: 'tesla',
  price: 20000,
  isNew: true,
  isSale: false,
  title: 'Tesla model x'
}


