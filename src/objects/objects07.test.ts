/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции maxOf<T extends Comparable>(a: T[]): T из файла objects07.ts, 
*/

import { test, expect } from 'vitest';
import { maxOf, type Comparable } from './objects07';

type Complex = { 
  real: number; 
  imaginary: number
  greaterThan: (other: Comparable) => boolean
};

const _greaterThan = (a: Complex, b: Complex): boolean => {
  const abs_a = a.real * a.real + a.imaginary * a.imaginary
  const abs_b = b.real * b.real + b.imaginary * b.imaginary
  return abs_a > abs_b
};

const c = { 
  real: 1,
  imaginary: 2,
  greaterThan: function(other: Comparable) {
    return _greaterThan(this, other as Complex);
  } 
};
const complexNumbers = Array.from({ length: 10 }, (_, i) => ({ 
  real: c.real + i,
  imaginary: c.imaginary + i,
  greaterThan: c.greaterThan
}));
const complexNumbers1 = [
  { real: 10, imaginary: 1, greaterThan: c.greaterThan },
  { real: 5, imaginary: 5, greaterThan: c.greaterThan },
  { real: 3, imaginary: 7, greaterThan: c.greaterThan },
];
const complexNumbers2 = [
  { real: 0, imaginary: 0, greaterThan: c.greaterThan },
  { real: 7, imaginary: 3, greaterThan: c.greaterThan },
  { real: 2, imaginary: 5, greaterThan: c.greaterThan },
];

test('maxOf should return correct max element', () => {
  expect(maxOf(complexNumbers1)).toEqual(complexNumbers1[0]);
  expect(maxOf(complexNumbers2)).toEqual(complexNumbers2[1]);
  expect(maxOf(complexNumbers)).toEqual(complexNumbers[9]);
});
