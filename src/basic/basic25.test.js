/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции removeFirstOccurrence из файла basic25.js
*/

import { test, expect } from 'vitest'
import { removeFirstOccurrence } from './basic25'

test('removeFirstOccurrence should return new array with first occurrence of value removed', () => {
  expect(removeFirstOccurrence([1, 2, 3], 2)).toEqual([1, 3])
  expect(removeFirstOccurrence([1, 2, 3, 2, 4], 2)).toEqual([1, 3, 2, 4])
  expect(removeFirstOccurrence([1, 2, 3], 4)).toEqual([1, 2, 3])
  expect(removeFirstOccurrence([1, 1, 1], 1)).toEqual([1, 1])
  expect(removeFirstOccurrence([], 1)).toEqual([])
})
