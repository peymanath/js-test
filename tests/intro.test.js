import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

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
