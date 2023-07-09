export function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}

const res = append<string>('hello', ['world']);
console.log(res);