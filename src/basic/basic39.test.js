/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции all из файла basic39.js
*/

import { test, expect } from 'vitest'
import { all } from './basic39'

test('all should return correct result', () => {
  expect(all([true, false, true], (x) => x)).toBe(false)
  expect(all([true, true, true], (x) => x)).toBe(true)
  expect(all([false, false, false], (x) => x)).toBe(false)
  expect(all([true, true, false], (x) => x)).toBe(false)
  expect(all([true, false, false], (x) => x)).toBe(false)
  expect(all([false, true, false], (x) => x)).toBe(false)
  expect(all([false, false, true], (x) => x)).toBe(false)
  expect(all([1, 2, 3], (x) => x > 0)).toBe(true)
  expect(all([-1, -2, -3], (x) => x > 0)).toBe(false)
  expect(all([-1, 2, 3], (x) => x > 0)).toBe(false)
  expect(all([-1, -2, 3], (x) => x > 0)).toBe(false)
  expect(all([-1, -2, -3], (x) => x > 0)).toBe(false)
})
