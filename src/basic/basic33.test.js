/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции zeroRowColumn из файла basic33.js
*/

import { test, expect } from 'vitest'
import { zeroRowColumn } from './basic33'

test('zeroRowColumn should return matrix with zero row and column', () => {
  expect(zeroRowColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0, 2)).toEqual([[0, 0, 0], [4, 5, 0], [7, 8, 0]])
  expect(zeroRowColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1, 1)).toEqual([[1, 0, 3], [0, 0, 0], [7, 0, 9]])
  expect(zeroRowColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2, 0)).toEqual([[0, 2, 3], [0, 5, 6], [0, 0, 0]])
  expect(zeroRowColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0, 0)).toEqual([[0, 0, 0], [0, 5, 6], [0, 8, 9]])
})
