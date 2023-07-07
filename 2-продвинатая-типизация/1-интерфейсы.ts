export const a = 3;

interface User {
  readonly email: string;
  readonly login: string; // ток для чтения
  password: string;
}

// Не будет ошибок при одинаковом имени интерфейса. Будет расширение интерфейса
interface User {
  isOnline?: boolean;
}

const user: User = {
  isOnline: true,
  email: 'fsdfs',
  login: 'fsdfs',
  password: '12423424'
};

// interface Window {
//   isAuth?: boolean;
// }
//
// window.isAuth = false;

interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

// Расширить интерфейс
interface Employee extends User, Person { // количество интерфейсов может быть больше одного
  contractStart: Date
}

// const user1: Employee = {
//
// }

interface Developer extends Employee {
  skills: string[];
  phone: string; // телефон будет перезаписан и станет обязательным полем
  level?: 'junior' | 'middle' | 'senior';
  say(): void;
  code: () => void;
}
//
// const user3: Developer = {
//
// }

// class MyDeveloper implements Developer {}