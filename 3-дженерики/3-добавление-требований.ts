function len<T extends {length: number}>(arg: T): number {
  return arg.length;
}

len('abc');
len(['abc']);
len({
  length: 12
});
// len(123) // Error

// len({a: 1}) // Error. Поля length нет в объекте

// object

export {}