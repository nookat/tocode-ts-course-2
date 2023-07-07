// Tuples - кортежи

const pairs: [string, string][] = [ ['key', 'value'], ['key2', 'value2'] ];
const data: [number, boolean, string] = [1, true, 'lodash'];
data.push(1);

console.log(data);

// csv
const document2: [string, string, number, Date][] = [];
document2.push(['alex', 'nep', 12, new Date(1994, 2, 4)]);