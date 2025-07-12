/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции remove_duplicates из файла basic17.js
*/

import { test, expect } from 'vitest'
import { remove_duplicates } from './basic17'

test('remove_duplicates should return array with duplicates removed', () => {
  expect(remove_duplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5])
  expect(remove_duplicates([1, 1, 1, 1, 1])).toEqual([1])
  expect(remove_duplicates([5, 4, 3, 3, 2, 1, 1, 5])).toEqual([5, 4, 3, 2, 1])
  expect(remove_duplicates([])).toEqual([])
  expect(remove_duplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
})

