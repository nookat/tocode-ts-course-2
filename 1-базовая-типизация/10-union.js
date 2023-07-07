"use strict";
const x = 'loading';
function printId2(id) {
    // сужение типов
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
function welcome1(person) {
    if (Array.isArray(person)) {
        console.log('Hello', person.join(' '));
        return 1;
    }
    else {
        console.log('hello', person);
        return person;
    }
}
const arr10 = ['hello', 2, 'fsdfsdfsd'];
