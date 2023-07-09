function fromPair(pair: [string, string]) {
  const [key, value] = pair;

  return {
    [key]: value
  };
}

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;

const myPair: FirstArg<typeof fromPair> = ['myKey', 'myValue'];

// fromPair(myPair as [string, string]);
fromPair(myPair);

type ConstructorFirstArg<T> = T extends { new(arg: infer A, ...args: any[]): any } ? A : never;

class Computer {
  constructor(brand: string) {
  }
}

const brand: ConstructorFirstArg<typeof Computer> = '';

// const dateArg: ConstructorFirstArg<typeof Date>


export {}