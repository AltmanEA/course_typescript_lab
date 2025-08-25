import { test, expect } from 'vitest';
import { Circle } from './model09';

test('area should return PI * radius * radius', () => {
  const circle = new Circle(5);
  expect(circle.area).toBeCloseTo(78.53981633974483);
});
