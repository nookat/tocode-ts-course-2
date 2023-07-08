"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.num = void 0;
let word = null;
exports.num = 10;
if (exports.num > 5) {
    word = 'abc';
}
console.log(word.toUpperCase()); // мы точно знаем, что там точно есть значение
function printName(name) {
    const fullName = name;
}
function printName2(person) {
    console.log(person.name);
}
const people = [
    {
        name: 'Gran',
        age: 70,
        sex: "female"
    },
    {
        name: 'Papa',
        age: 72,
        sex: 'male'
    },
    {
        name: 'Ivan',
        age: 20,
        sex: 'male'
    }
];
const femalePeople = people.find(person => person.sex == 'female');
