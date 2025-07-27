/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции fromArrays из файла objects20.ts
*/

import { test, expect } from 'vitest';
import { fromArrays } from './objects20';

test('fromArrays should return object from arrays of keys and values', () => {
  expect(fromArrays(['a', 'b', 'c'], [1, 2, 3])).toEqual({ a: 1, b: 2, c: 3 });
  expect(fromArrays(['a', 'b'], [1, 2, 3])).toEqual({ a: 1, b: 2 });
  expect(fromArrays(['a', 'b', 'c'], [1, 2])).toEqual({ a: 1, b: 2 });
  expect(fromArrays([], [1, 2, 3])).toEqual({});
  expect(fromArrays(['a', 'b', 'c'], [])).toEqual({});
});

