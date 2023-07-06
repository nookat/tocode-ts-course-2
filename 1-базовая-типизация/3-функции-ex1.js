"use strict";
// Переписать на TS
// function slice(str, start, end) {
//   let newStr = '';
//
//   let lastIndex;
//
//   if (end) {
//     lastIndex = end > str.length ? str.length : end;
//   } else {
//     lastIndex = str.length;
//   }
//
//   for (let i = start; i < lastIndex; i++) {
//     newStr += str[i];
//   }
//
//   return newStr;
// }
const slice = (str, start, end) => {
    let newStr = '';
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
};
