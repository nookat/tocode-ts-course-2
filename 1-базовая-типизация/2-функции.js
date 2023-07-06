"use strict";
/* Базовая типизация функций */
function sum(a, b) {
    return a + b;
}
// sum(2, 'hello') // Error
// sum(1) // Error
console.log(sum(2, 3));
const sum2 = (a, b) => a + b;
sum2(3, 4);
const sum3 = function (a, b) {
    return a + b;
};
sum3(22, 3);
// функция завершится успешно, но по факту она ничего не вернет (undefined по дефолту)
function log(name, userId) {
    console.log('hello name: ', name, 'with id', userId || 'anonym');
}
log('Alexander', '29');
// функция не завершится с return, поэтому never
function crash() {
    throw new Error('crash');
}
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
console.log(average(2, 5, 3));
