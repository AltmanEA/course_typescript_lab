/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции find_max из файла basic12.js
*/

import { test, expect } from 'vitest'
import { find_max } from './basic12'

test('find_max should return correct max element', () => {
  expect(find_max([1, 2, 3])).toBe(3)
  expect(find_max([0, 1, 2, 3])).toBe(3)
  expect(find_max([-1, 0, 1, 2, 3])).toBe(3)
  expect(find_max([-2, -1, 0, 1, 2, 3])).toBe(3)
  expect(find_max([-3, -2, -1, 0, 1, 2, 3])).toBe(3)
  expect(find_max([-5, -4, -3, -2, -1, 0, 1, 2, 3])).toBe(3)
  expect(find_max([-10, -5, -4, -3, -2, -1, 0, 1, 2, 3])).toBe(3)
  expect(find_max([-100, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10)
})
