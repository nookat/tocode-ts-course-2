"use strict";
// Aliases type
// 1. primitives, union
// type Window - Не может быть создан. Не можем использовать если уже есть зарезирвированные названия
const car = {
    wheels: 2,
    type: 'sedan',
    model: 'x',
    year: 2010,
    brand: 'tesla',
    price: 200,
    title: 'Tesla model x'
};
const car2 = {
    type: 'x',
    model: 'tesla',
    wheels: 4,
    year: 2020,
    brand: 'tesla',
    price: 20000,
    isNew: true,
    isSale: false,
    title: 'Tesla model x'
};
