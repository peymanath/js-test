import { describe, test, it, expect } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  // First Test
  it("should return the first argument if it is greater", () => {
    // Arrange
    const a = 5;
    const b = 4;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(5);
  });

  // Second Test
  it("should return the second argument if it is greater", () => {
    // Arrange
    const a = 4;
    const b = 5;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(5);
  });

  // Second Test
  it("should return the first argument if arguments are equal", () => {
    // Arrange
    const a = 4;
    const b = 4;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(4);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if arg is divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return Buzz if arg is divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return arg as a string if it is not divisible by 3 or 5", () => {
    expect(fizzBuzz(11)).toBe("11");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it("should calculate the average of an array with two element", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  it("should calculate the average of an array with three element", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe("factorial", () => {
  it("should return 1 if given 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if given 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 if given 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 if given 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 24 if given 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return undefined if given a negative number", () => {
    expect(factorial(-1)).toBe(undefined);
  });
});
