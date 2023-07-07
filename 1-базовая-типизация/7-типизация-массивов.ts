const numbers2: number[] = [1, 1, 2];
const numbers = [1, 2, 3];
const numbers3: (string | boolean | number)[] = [
  1,
  false,
  'hello'
];

const strs: string[] = [];
const str3: Array<string> = [];
str3.push('rembo');

interface Car2 {
  wheels: number;
  brand: string;
}

const cars: Car2[] = [];
cars.push({
  wheels: 3,
  brand: 'Bmw'
});

const arrOfArray: string[][] = [];
arrOfArray.push(['', '']);

function printArr(arr: unknown[]): void {
  arr.forEach((el, idx, array) => {
    console.log(el);
  })
}