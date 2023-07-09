function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any {
  return value[0];
}

head(['12q', 'sasfsdf']);

interface ModelData<T> {
  title: string;
  value: T;
}

const obj1: ModelData<number> = {
  title: 'hello',
  value: 12
}

// obj1.value = 'xvxcvx'; // Error

const obj2: ModelData<Array<number>> = {
  title: 'rembo',
  value: [1, 2, 2333]
}

const head2 = <T>(value: T[]): T => value[0];

// Array<string>
// string[]
// Promise<number>

type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

function toArray<T>(...args: T[]): T[] {
  return args;
}

toArray<number>(1, 2, 3); // можно явно указать
toArray('ad', 'ffs','hfs');



export {}