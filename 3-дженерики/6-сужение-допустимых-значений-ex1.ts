function keys<O extends object>(obj: O): Array<keyof O> {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

const obj1 = {
 name: 'ivan',
 age: 19
};

console.log(keys(obj1));

function values<O extends object>(obj: O): Array<O[keyof O]> {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}

export {}