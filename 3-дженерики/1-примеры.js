"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function head(value) {
    return value[0];
}
head(['12q', 'sasfsdf']);
const obj1 = {
    title: 'hello',
    value: 12
};
// obj1.value = 'xvxcvx'; // Error
const obj2 = {
    title: 'rembo',
    value: [1, 2, 2333]
};
const head2 = (value) => value[0];
function toArray(...args) {
    return args;
}
toArray(1, 2, 3); // можно явно указать
toArray('ad', 'ffs', 'hfs');
