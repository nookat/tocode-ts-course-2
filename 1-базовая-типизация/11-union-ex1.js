"use strict";
function gradeDeveloper11(user, newLevel) {
    user.level = newLevel;
    return user;
}
const user11 = {
    login: 'nookat',
    skills: ['js', 'react', 'node', 'mongo'],
    level: 'middle'
};
console.log(gradeDeveloper11(user11, 'senior'));
