/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции map из файла basic37.js
*/

import { test, expect } from 'vitest'
import { map } from './basic37'

test('map should return correct elements', () => {
  expect(map([1, 2, 3], (x) => x * x)).toEqual([1, 4, 9])
  expect(map([1, 2, 3], (x) => x + 2)).toEqual([3, 4, 5])
  expect(map([5, 5, 5, 5], (x) => x * 2)).toEqual([10, 10, 10, 10])
  expect(map([1, 2, 3, 4, 5], (x) => x + 1)).toEqual([2, 3, 4, 5, 6])
})
