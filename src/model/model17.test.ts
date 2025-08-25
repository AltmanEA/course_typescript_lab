import { test, expect, describe } from "vitest";
import { Rectangle, Square } from "./model17";

describe("LSP Task 5: Invariants", () => {
  test("Square should maintain equal sides after setSize", () => {
    const square = new Square(5, 5);
    square.setSize(10, 8);
    expect(square.width).toBe(10);
    expect(square.height).toBe(10); // Должно стать 10, а не 8
  });

  test("Square area calculation should work correctly", () => {
    const square = new Square(5, 5);
    square.setSize(7, 3);
    expect(square.area).toBe(49); // 7 * 7 = 49
  });

  test("Square should be substitutable for Rectangle", () => {
    const rect: Rectangle = new Square(5, 5);
    expect(() => rect.setSize(10, 5)).not.toThrow();
    expect(rect.width).toBe(rect.height); // Инвариант сохранен
  });
});
