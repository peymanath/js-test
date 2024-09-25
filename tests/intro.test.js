import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

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
