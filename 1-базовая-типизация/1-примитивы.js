"use strict";
/*  Примитивные типы */
// numbers
let str;
str = 'hello world';
let symb = Symbol('as');
// console.log(str + symb); // Error
let o = true;
o = false;
// nothing
let h = undefined;
let g = null;
// literal
const num = 108;
const str2 = 'str';
// universal (any) - тип крайнего случая, необходимо избегать такого
let mm = 1;
mm = 'str';
mm = [];
// unknown
let xx = 2;
if (typeof xx === 'string') {
    xx.toUpperCase();
}
