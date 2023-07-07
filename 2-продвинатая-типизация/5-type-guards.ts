type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim();
  }

  return animal.fly();
}


// но надо правильно использовать type guards, иначе могут выйти неприятные ситуации
function isNull(val: any): val is null {
  return !val;
}

const empty = '';
const zero = 0;

// if (isNull(empty)) {
//   // empty
// }
//
// if (isNull(zero)) {
//   zero
// }


export {};