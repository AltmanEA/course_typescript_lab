/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции insertAtPosition из файла basic27.js
*/

import { test, expect } from 'vitest'
import { insertAtPosition } from './basic27'

test('insertAtPosition should return new array with element inserted at correct position', () => {
  expect(insertAtPosition([1, 2, 3], 1, 4)).toEqual([1, 4, 2, 3])
  expect(insertAtPosition([1, 2, 3], 2, 4)).toEqual([1, 2, 4, 3])
  expect(insertAtPosition([1, 2, 3], 0, 4)).toEqual([4, 1, 2, 3])
  expect(insertAtPosition([1, 2, 3], 3, 4)).toEqual([1, 2, 3, 4])
  expect(insertAtPosition([], 0, 4)).toEqual([4])
})
