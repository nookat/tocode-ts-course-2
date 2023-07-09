"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
const toTupleWith1 = tuplePairCreator(1);
const val1 = toTupleWith1(2);
const val2 = toTupleWith1('hello');
