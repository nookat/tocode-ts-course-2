export const a = 3;

type Union = 'a' | 'b' | 'c' | 'd';
type Union1 = 'a' | 'e' | 'c' | 'i';

type Union3 = Union1 | Union; // все варианты

// в случае с union мы оставим только одинаковую часть
type Union4 = 'a' | 'b' | 'c' | 'd';
type Union5 = 'a' | 'e' | 'c' | 'i';

type Union6 = Union4 & Union5; // берется общая часть, то есть a или c

// в случае с объектами получаем склеивание так называемое
type Union7 = {a: string, b: string, c: string} & {a: string, t: boolean, z: null};

// const example: Union7 = {}

type User = {
  readonly email: string;
  readonly login: string;
  password: string;
};

type Person = {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
};

// у типов нет ключевого слова extends
type Employee = {
  constractStart: Date
} & User & Person;

// const user1: Employee = {}

type Developer = {
  skills: string[];
  phone: string;
  level?: 'junior' | 'middle' | 'senior',
  say?(): void;
  code: (arg: string) => void;
} & Employee;