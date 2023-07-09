"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.append = void 0;
function append(el, list) {
    return list.concat(el);
}
exports.append = append;
const res = append('hello', ['world']);
console.log(res);
