/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции filter из файла basic36.js
*/

import { test, expect } from 'vitest'
import { filter } from './basic36'

test('filter should return correct elements', () => {
  expect(filter([1, 2, 3, 4, 5], (x) => x % 2 == 0)).toEqual([2, 4])
  expect(filter([1, 2, 3], (x) => x % 2 != 0)).toEqual([1, 3])
  expect(filter([-1, 0, 1], (x) => x >= 0)).toEqual([0, 1])
  expect(filter([5, 5, 5, 5], (x) => x % 2 == 0)).toEqual([])
  expect(filter([1, 2, 3, 4, 5], (x) => x % 2 == 0)).toEqual([2, 4])
})
