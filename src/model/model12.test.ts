import { test, expect } from 'vitest';
import { CircleArea, MathOperations } from './model12';

test('calculate method should return correct area', () => {
  const circle = new CircleArea(5);
  expect(circle.calculate()).toBeCloseTo(78.53981633974483);
});

test('square method should return correct square of the number', () => {  
  expect(MathOperations.square(5)).toBe(25);
});
