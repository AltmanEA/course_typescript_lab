/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции isSymmetric из файла basic34.js
*/

import { test, expect } from 'vitest'
import { isSymmetric } from './basic34'

test('isSymmetric should return true for symmetric matrix', () => {
  expect(isSymmetric([[1, 2, 3], [2, 4, 5], [3, 5, 6]])).toBe(true)
  expect(isSymmetric([[1, 2], [2, 1]])).toBe(true)
  expect(isSymmetric([[1, 2, 3, 4], [2, 1, 5, 6], [3, 5, 1, 7], [4, 6, 7, 1]])).toBe(true)
})

test('isSymmetric should return false for non-symmetric matrix', () => {
  expect(isSymmetric([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(false)
  expect(isSymmetric([[1, 2], [3, 4]])).toBe(false)
  expect(isSymmetric([[1, 2, 3], [4, 5, 6], [7, 8, 10]])).toBe(false)
})
