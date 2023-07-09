import { average } from "../1-базовая-типизация/2-функции";

console.log(typeof 'absz');

let str = 'hello world';
type x = typeof str;

type fn = typeof average;

const maximum: fn = (...numbers) => Math.max(...numbers);
maximum(1, 2, 3);

type ReturnFn = ReturnType<typeof average>; // вернет тип возвращаемого значения average

export {}