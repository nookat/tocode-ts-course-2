function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}

const x = head('ssd');
console.log(x + 1);

const y = head([3, 2, 4]);
console.log(y + 4);

const z = head([true, true, false]);
console.log(z || false);

export {}