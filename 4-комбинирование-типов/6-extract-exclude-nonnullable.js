"use strict";
// Exclude исключает типы
Object.defineProperty(exports, "__esModule", { value: true });
const i = 3;
const i2 = [];
// some code
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
