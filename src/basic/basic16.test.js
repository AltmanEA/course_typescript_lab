/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции reverse_list из файла basic16.js
*/

import { test, expect } from 'vitest'
import { reverse_list } from './basic16'

test('reverse_list should return reversed array', () => {
  expect(reverse_list([1, 2, 3])).toEqual([3, 2, 1])
  expect(reverse_list([5, 5, 5, 5])).toEqual([5, 5, 5, 5])
  expect(reverse_list([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
})
