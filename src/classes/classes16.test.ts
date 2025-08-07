/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для класса Complex из файла classes16.ts
*/

import { test, expect } from 'vitest';
import { Complex } from './classes16';

test('constructor should correctly assign real and imaginary numbers', () => {
  const c = new Complex(1, 2);
  expect(c.real).toBe(1);
  expect(c.imag).toBe(2);
});

test('sum method should return new Complex with correct sums', () => {
  const c1 = new Complex(1, 2);
  const c2 = new Complex(3, 4);
  const sum = c1.sum(c2);
  expect(sum).toEqual(new Complex(4, 6));
});
