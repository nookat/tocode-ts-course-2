"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
// но надо правильно использовать type guards, иначе могут выйти неприятные ситуации
function isNull(val) {
    return !val;
}
const empty = '';
const zero = 0;
