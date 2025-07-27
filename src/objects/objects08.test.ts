/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции XXX из файла objects8.ts
*/

import { test, expect } from 'vitest';
import { sum, type Summable } from './objects08';

type Complex = { 
  real: number; 
  imaginary: number
  sum: (other: Summable) => Summable
};

const _sum = (a: Complex, b?: Complex): Complex => (
  { 
    real: a.real + (b?.real ?? 0), 
    imaginary: a.imaginary + (b?.imaginary ?? 0),
    sum: function (other: Summable) { 
      return _sum(this, other as Complex);
    }
  }
);

const c: Complex = { 
  real: 1,
  imaginary: 2,
  sum: function (other: Summable) { 
    return _sum(this, other as Complex);
  }
};

test('sum should return correct sum', () => {
  expect(sum([c, c]).real).toBe(2);
  expect(sum([c, c, c, c]).imaginary).toBe(8);
});