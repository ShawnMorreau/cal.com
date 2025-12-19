import { describe, it, expect } from "vitest";

import { quicksort } from "./quicksort";

describe("quicksort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const result = quicksort(input);
    expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  it("should handle empty array", () => {
    const input: number[] = [];
    const result = quicksort(input);
    expect(result).toEqual([]);
  });

  it("should handle single element array", () => {
    const input = [42];
    const result = quicksort(input);
    expect(result).toEqual([42]);
  });

  it("should handle already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    const result = quicksort(input);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle reverse sorted array", () => {
    const input = [5, 4, 3, 2, 1];
    const result = quicksort(input);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle array with duplicates", () => {
    const input = [3, 3, 3, 1, 1, 2, 2];
    const result = quicksort(input);
    expect(result).toEqual([1, 1, 2, 2, 3, 3, 3]);
  });

  it("should handle negative numbers", () => {
    const input = [3, -1, 4, -5, 0, 2];
    const result = quicksort(input);
    expect(result).toEqual([-5, -1, 0, 2, 3, 4]);
  });

  it("should sort strings alphabetically", () => {
    const input = ["banana", "apple", "cherry", "date"];
    const result = quicksort(input);
    expect(result).toEqual(["apple", "banana", "cherry", "date"]);
  });

  it("should support custom comparison function for descending order", () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6];
    const result = quicksort(input, (a, b) => b - a);
    expect(result).toEqual([9, 6, 5, 4, 3, 2, 1, 1]);
  });

  it("should support custom comparison function for objects", () => {
    const input = [
      { name: "Charlie", age: 30 },
      { name: "Alice", age: 25 },
      { name: "Bob", age: 35 },
    ];
    const result = quicksort(input, (a, b) => a.age - b.age);
    expect(result).toEqual([
      { name: "Alice", age: 25 },
      { name: "Charlie", age: 30 },
      { name: "Bob", age: 35 },
    ]);
  });

  it("should handle large arrays efficiently", () => {
    const input = Array.from({ length: 1000 }, (_, i) => 1000 - i);
    const result = quicksort(input);
    const expected = Array.from({ length: 1000 }, (_, i) => i + 1);
    expect(result).toEqual(expected);
  });
});
