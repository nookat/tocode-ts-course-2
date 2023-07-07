type Status = 'ok' | 'loading' | 'error'; // значение сузилось до конкретных значений

const x: Status = 'loading';

function printId2(id: number | string): void {
  // сужение типов
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id);
  }
}

function welcome1(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    console.log('Hello', person.join(' '));
    return 1;
  } else {
    console.log('hello', person);
    return person;
  }
}

const arr10: (number | string)[] = ['hello', 2, 'fsdfsdfsd'];