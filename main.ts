export function value<T>(item: T,): T {
  return [item];
}
console.log(value<number>(42));