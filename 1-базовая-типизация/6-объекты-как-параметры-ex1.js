"use strict";
const user1 = {
    login: 'nookat',
    email: 'nookat@gmail.com',
    password: '3333',
    isOnline: false,
    lastVisited: new Date()
};
const admin = {
    login: 'alex',
    email: 'luiz@gmail.com',
    password: '4444',
    isOnline: false,
    lastVisited: new Date(2022, 6, 12),
    role: ['admin']
};
function login(user) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log('Привет,', user.login);
    }
}
login(user1);
login(admin);
