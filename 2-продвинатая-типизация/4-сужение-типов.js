"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example(x) {
    if (typeof x === 'string') {
        x.toLowerCase();
    }
    else if (typeof x === 'number') {
        x.toFixed(2);
    }
    else if (x === undefined) {
        console.log('no value');
    }
}
function example2(strs) {
    // if (Array.isArray(strs)) {
    //
    // }
    // проверка на null
    if (strs && typeof strs === 'object') {
        strs.reverse();
    }
    else if (typeof strs === 'string') {
        strs.toLowerCase();
    }
}
function example3(x) {
    // проверка на дату
    if (x instanceof Date) {
        // что то делаем
    }
    else {
        x.concat([1, 2]);
    }
}
function move(animal) {
    // проверка на наличия свойства в объекте
    if ('swim' in animal) {
        return animal.swim();
    }
    // сузили до Bird, typescript это понимает
    return animal.fly();
}
