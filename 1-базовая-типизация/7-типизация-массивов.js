"use strict";
const numbers2 = [1, 1, 2];
const numbers = [1, 2, 3];
const numbers3 = [
    1,
    false,
    'hello'
];
const strs = [];
const str3 = [];
str3.push('rembo');
const cars = [];
cars.push({
    wheels: 3,
    brand: 'Bmw'
});
const arrOfArray = [];
arrOfArray.push(['', '']);
function printArr(arr) {
    arr.forEach((el, idx, array) => {
        console.log(el);
    });
}
