export function quicksort<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0)
): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left: T[] = [];
  const middle: T[] = [];
  const right: T[] = [];

  for (const element of arr) {
    const comparison = compareFn(element, pivot);
    if (comparison < 0) {
      left.push(element);
    } else if (comparison > 0) {
      right.push(element);
    } else {
      middle.push(element);
    }
  }

  return [...quicksort(left, compareFn), ...middle, ...quicksort(right, compareFn)];
}
