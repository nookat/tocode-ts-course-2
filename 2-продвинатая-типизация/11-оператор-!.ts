let word: string | null = null;
export const num = 10;

if (num > 5) {
  word = 'abc';
}

console.log(word!.toUpperCase()); // мы точно знаем, что там точно есть значение

function printName(name?: string) {
  const fullName: string = name!;
}

interface Person {
  name: string;
  age: number;
  sex: 'female' | 'male';
}

function printName2(person?: Person) {
  console.log(person!.name);
}

const people: Person[] = [
  {
    name: 'Gran',
    age: 70,
    sex: "female"
  },
  {
    name: 'Papa',
    age: 72,
    sex: 'male'
  },
  {
    name: 'Ivan',
    age: 20,
    sex: 'male'
  }
]

const femalePeople = people.find(person => person.sex == 'female')!;

export {}