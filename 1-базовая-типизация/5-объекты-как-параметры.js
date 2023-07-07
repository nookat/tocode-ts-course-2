"use strict";
function printPoint(point) {
    console.log(`
    Координаты точки: x - ${point.x} и y - ${point.y}
  `);
}
const obj1 = {
    x: '1',
    y: '2'
};
printPoint(obj1);
// при передаче объекта в функцию учитываются только обязательные поля, сам объект может содержать больше полей, чем указано
const obj2 = {
    x: '1',
    y: '2',
    z: '4'
};
printPoint(obj2);
function printName({ firstName, lastName }) {
    console.log(`hello, ${firstName.toUpperCase()}`);
    if (lastName) {
        console.log(`nice to meet you, ${lastName.toLowerCase()}`);
    }
}
printName({ firstName: 'Ivan' });
