/* Базовая типизация функций */

function sum(a: number, b: number): number {
  return a + b;
}

// sum(2, 'hello') // Error
// sum(1) // Error
console.log(sum(2, 3));

const sum2 = (a: number, b: number): number => a + b;
sum2(3, 4);

const sum3 = function (a: number, b: number): number {
  return a + b;
};
sum3(22, 3);

// функция завершится успешно, но по факту она ничего не вернет (undefined по дефолту)
function log(name: string, userId?: string): void {
  console.log('hello name: ', name, 'with id', userId || 'anonym');
}

log('Alexander', '29');

// функция не завершится с return, поэтому never
function crash(): never {
  throw new Error('crash');
}

export function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);
  return sum / nums.length;
}

console.log(average(2, 5, 3));