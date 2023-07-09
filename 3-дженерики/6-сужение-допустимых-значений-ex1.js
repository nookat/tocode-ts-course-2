"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
const obj1 = {
    name: 'ivan',
    age: 19
};
console.log(keys(obj1));
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
