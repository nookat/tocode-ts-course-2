/*  Примитивные типы */

// numbers
let str: string;
str = 'hello world';

let symb = Symbol('as');
// console.log(str + symb); // Error

let o = true;
o = false;

// nothing
let h: undefined = undefined;
let g: null = null;

// literal
const num = 108;
const str2 = 'str'

// universal (any) - тип крайнего случая, необходимо избегать такого
let mm: any = 1;
mm = 'str';
mm = []

// unknown
let xx: unknown = 2;
if (typeof xx === 'string') {
  xx.toUpperCase();
}
