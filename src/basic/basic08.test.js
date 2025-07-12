/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции sum_digits из файла basic08.js
*/

import { test, expect } from 'vitest'
import { sum_digits } from './basic08'

test('sum_digits should return correct sum', () => {
  expect(sum_digits(1234)).toBe(10)
  expect(sum_digits(4321)).toBe(10)
  expect(sum_digits(9876)).toBe(30)
  expect(sum_digits(10000)).toBe(1)
})
