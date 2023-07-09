// Exclude исключает типы

type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // a | b
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b' | 'd'>; // c. Даже если укажем вторым параметром d ошибок не будет
type T2 = Exclude<string | number | (() => void), Function>; // string | number

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type NumericStatus = Exclude<Status, string>; // 200 | 401 | 504
type TextStatus = Exclude<Status, number>; // 'success' | 'clientError' | 'serverError'




// Extract извлекает типы

type T01 = Extract<'a' | 'b' | 'c', 'a'>; // 'a'
type T11 = Extract<'a' | 'b' | 'c', 'a' | 'b' | 'd'>; // 'a' | 'b' . Ошибки при 'd' не возникнет
type T22 = Extract<string | number | (() => void), Function>; // (() => void)

interface Person {
  age: number;
  firstName: string;
  lastName: string;
  sex: 'male' | 'female';
  country: string;
  education: string;
  skills: string[]
}

type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>; // 'firstName' | 'lastName'


// NonNullable отбрасывает null и undefined из типов
type T02 = NonNullable<string | number | undefined>; //

const i: T02 = 3;

type T003 = NonNullable<string[] | null | undefined>; // string[]

const i2: T003 = [];

// some code
function keys<O extends object>(obj: O): Extract<keyof O, string>[] {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

export {}