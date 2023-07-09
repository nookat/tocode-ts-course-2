type answer1 = 64 extends number ? true : false;

type answer2 = number extends 64 ? true : false;

type answer3 = string[] extends any ? true : false;

type answer4 = string[] extends any[] ? true : false;

type answer5 = never extends any ? true : false;

type answer6 = any extends any ? true : false;

type answer7 = Date extends { new(...args: any[]): any } ? true : false;

type answer8 = typeof Date extends { new(...args: any[]): any } ? true : false;

export {}