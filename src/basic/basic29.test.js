/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции rotateArrayLeft из файла basic29.js
*/

import { test, expect } from 'vitest'
import { rotateArrayLeft } from './basic29'

test('rotateArrayLeft should return array with elements rotated left', () => {
  expect(rotateArrayLeft([1, 2, 3])).toEqual([2, 3, 1])
  expect(rotateArrayLeft([1, 2, 3, 4])).toEqual([2, 3, 4, 1])
  expect(rotateArrayLeft([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 1])
  expect(rotateArrayLeft([1])).toEqual([1])
  expect(rotateArrayLeft([])).toEqual([])
})
