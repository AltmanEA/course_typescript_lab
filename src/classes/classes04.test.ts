/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для класса Point из файла classes04.ts
*/

import { test, expect } from 'vitest';
import { Point } from './classes04';

test('Point constructor should correctly initialize with two numbers', () => {
  const point = new Point(3, 4);
  expect(point.coords).toEqual([3, 4]);
});

test('Point constructor should correctly initialize with an array of numbers', () => {
  const point = new Point([5, 6]);
  expect(point.coords).toEqual([5, 6]);
});


test('Point constructor should handle input with single array containing a single pair', () => {
  const point = new Point([7, 8]);
  expect(point.coords).toEqual([7, 8]);
});

