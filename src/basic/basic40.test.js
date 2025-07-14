/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции find из файла basic40.js
*/

import { test, expect } from 'vitest'
import { find } from './basic40'

test('find should return correct element', () => {
  expect(find([1, 2, 3, 4, 5], (x) => x % 2 == 0)).toBe(2)
  expect(find([1, 2, 3], (x) => x % 2 != 0)).toBe(1)
  expect(find([-1, 0, 1], (x) => x >= 0)).toBe(0)
  expect(find([5, 5, 5, 5], (x) => x % 2 == 0)).toBe(undefined)
  expect(find([1, 2, 3, 4, 5], (x) => x % 2 == 0)).toBe(2)
})
