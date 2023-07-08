"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function head(value) {
    return value[0];
}
const x = head('ssd');
console.log(x + 1);
const y = head([3, 2, 4]);
console.log(y + 4);
const z = head([true, true, false]);
console.log(z || false);
